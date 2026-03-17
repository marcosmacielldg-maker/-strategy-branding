import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendEmail, sendToWebhook, WEBHOOK_DIAGNOSIS, EMAILJS_TEMPLATE_DIAGNOSIS_ID, sendToGoogleSheets } from '../../lib/integrations';
import MountainProgress from './MountainProgress';
import LeadCapture from './LeadCapture';
import DiagnosisExpressResult from './DiagnosisExpressResult';
import { TopographicPattern, MountainSilhouette } from './BackgroundElements';

// Array das perguntas Express
const expressQuestions = [
    {
        id: 1,
        title: "O que você vende?",
        placeholder: "Ex: Consultoria financeira para pequenas empresas (em 1 frase)",
        type: "textarea"
    },
    {
        id: 2,
        title: "Para quem você vende?",
        placeholder: "Descreva seu cliente ideal em 1 frase",
        type: "textarea"
    },
    {
        id: 3,
        title: "Qual problema você resolve?",
        placeholder: "Ex: Ajudo a organizar as finanças e aumentar o lucro (em 1 frase)",
        type: "textarea"
    },
    {
        id: 4,
        title: "Como os clientes chegam até você hoje?",
        placeholder: "Indicação, orgânico, anúncios, parcerias, outro...",
        type: "input"
    },
    {
        id: 5,
        title: "Link ou @ do seu perfil principal",
        placeholder: "Instagram e/ou LinkedIn",
        type: "input"
    },
    {
        id: 6,
        title: "Qual seu objetivo no digital agora?",
        placeholder: "Autoridade, leads, agenda, vendas...",
        type: "input"
    },
    {
        id: 7,
        title: "Em 60 dias, como quer perceber que deu certo?",
        placeholder: "Meta simples em 1 frase",
        type: "textarea"
    }
];

const DiagnosisExpressWizard: React.FC = () => {
    // 0 = Intro, 1-7 = Questions, 8 = Lead Capture, 9 = Result
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [currentInput, setCurrentInput] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

    const TOTAL_QUESTIONS = expressQuestions.length;

    // Focus input when step changes
    useEffect(() => {
        if (currentStep >= 1 && currentStep <= TOTAL_QUESTIONS) {
            setCurrentInput(answers[currentStep] || '');
            // Pequeno delay para a animação terminar antes de focar
            setTimeout(() => {
                inputRef.current?.focus();
            }, 400);
        }
    }, [currentStep]);

    const handleStart = () => {
        setCurrentStep(1);
        window.scrollTo(0, 0);
    };

    const handleNextQuestion = () => {
        if (!currentInput.trim()) return;

        setAnswers({ ...answers, [currentStep]: currentInput.trim() });

        if (currentStep < TOTAL_QUESTIONS) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(currentStep + 1); // Vai para Lead Capture
        }
        window.scrollTo(0, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleNextQuestion();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            if (currentStep >= 1 && currentStep <= TOTAL_QUESTIONS) {
                // Save current input before going back
                setAnswers({ ...answers, [currentStep]: currentInput.trim() });
            }
            setCurrentStep(currentStep - 1);
        }
    };

    const handleLeadSubmit = async (name: string, email: string, phone: string) => {
        setLoading(true);

        // Prepare data for automation
        const data = {
            name,
            email,
            phone,
            answers: JSON.stringify(answers), // Envia as respostas em texto como JSON string
            source: 'Diagnosis Express Wizard',
            status: 'success',
            // Variáveis formatadas para um email mais legível caso o template suporte
            q1: answers[1] || "",
            q2: answers[2] || "",
            q3: answers[3] || "",
            q4: answers[4] || "",
            q5: answers[5] || "",
            q6: answers[6] || "",
            q7: answers[7] || "",
        };

        try {
            // Send to Webhook (CRM) and EmailJS (Notification) in parallel
            // Usando o mesmo template ID do diagnóstico normal por enquanto, 
            // ou um novo se configurado no .env futuramente.
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_EXPRESS_ID || EMAILJS_TEMPLATE_DIAGNOSIS_ID;

            const tasks: Promise<any>[] = [
                sendToGoogleSheets('https://script.google.com/macros/s/AKfycbziC0dic4FQDlnfMUZ2jve-D6aaNR61n7ftvBo0qehbwfYNFxbh_MG9qaFp0NUONQQn/exec', data),
                sendToWebhook(WEBHOOK_DIAGNOSIS, data)
            ];

            tasks.push(sendEmail(data, templateId));

            await Promise.allSettled(tasks);
        } catch (error) {
            console.error("Error sending diagnosis priority data:", error);
        }

        setLoading(false);
        setCurrentStep(currentStep + 1); // Vai para o Result
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-gray-800 pb-20 font-sans selection:bg-brand-green/30 relative overflow-hidden">
            <TopographicPattern />
            <MountainSilhouette />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 via-transparent to-slate-50/50 z-0 pointer-events-none" />

            <div className="relative z-10">
                {/* Standalone Header */}
                <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
                    <Link to="/" className="font-serif text-2xl tracking-tight text-gray-900 hover:opacity-70 transition-opacity">
                        marcosmaciell
                    </Link>
                    <Link to="/" className="text-sm font-medium text-gray-500 hover:text-brand-green transition-colors flex items-center gap-2">
                        <span className="hidden md:inline">Voltar para Home</span>
                        <ArrowLeft className="w-4 h-4 md:hidden" />
                    </Link>
                </header>

                <main className="pt-24 md:pt-32 px-4 container mx-auto">
                    {/* Navigation / Header */}
                    <div className="mb-0 flex items-center justify-between h-8">
                        {(currentStep > 0 && currentStep <= TOTAL_QUESTIONS + 1) && (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 text-gray-500 hover:text-brand-green transition-colors font-medium relative z-50"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Voltar
                            </button>
                        )}
                    </div>

                    {/* Introduction Step */}
                    {currentStep === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto py-10"
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold mb-8 border border-brand-green/20 tracking-wide uppercase">
                                Diagnóstico Express
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 !text-black tracking-tight leading-tight">
                                Mapeamento Rápido <br />
                                em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">5 minutos</span>.
                            </h1>
                            <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                                Responda a 7 perguntas objetivas sobre seu negócio, seu público e seus objetivos atuais para nossa equipe traçar seu plano de ação.
                            </p>
                            <button
                                onClick={handleStart}
                                className="bg-brand-green text-white font-bold text-lg py-5 px-12 rounded-full hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
                            >
                                Iniciar Diagnóstico ⚡️
                            </button>
                        </motion.div>
                    )}

                    {/* Progress Bar (Only during questions) */}
                    {(currentStep >= 1 && currentStep <= TOTAL_QUESTIONS) && (
                        <MountainProgress currentStep={currentStep} totalSteps={TOTAL_QUESTIONS} />
                    )}

                    {/* Questions Steps */}
                    <AnimatePresence mode='wait'>
                        {(currentStep >= 1 && currentStep <= TOTAL_QUESTIONS) && (
                            <motion.div
                                key={`question-${currentStep}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center pt-2 md:pt-16"
                            >
                                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-5 md:mb-12 text-center leading-tight tracking-tight relative z-20 w-full px-4">
                                    {expressQuestions[currentStep - 1].title}
                                </h2>

                                <div className="w-full relative px-2">
                                    {expressQuestions[currentStep - 1].type === 'textarea' ? (
                                        <textarea
                                            ref={inputRef as React.MutableRefObject<HTMLTextAreaElement>}
                                            value={currentInput}
                                            onChange={(e) => setCurrentInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder={expressQuestions[currentStep - 1].placeholder}
                                            className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 text-lg md:text-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all shadow-sm resize-none min-h-[90px] md:min-h-[150px]"
                                            rows={3}
                                            autoFocus
                                        />
                                    ) : (
                                        <input
                                            ref={inputRef as React.MutableRefObject<HTMLInputElement>}
                                            type="text"
                                            value={currentInput}
                                            onChange={(e) => setCurrentInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder={expressQuestions[currentStep - 1].placeholder}
                                            className="w-full bg-white border-2 border-slate-200 rounded-2xl px-5 py-4 text-lg md:text-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/20 transition-all shadow-sm"
                                            autoFocus
                                        />
                                    )}

                                    <div className="mt-5 md:mt-8 flex justify-center md:justify-end">
                                        <button
                                            onClick={handleNextQuestion}
                                            disabled={!currentInput.trim()}
                                            className="w-full md:w-auto bg-brand-green text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2"
                                        >
                                            {currentStep === TOTAL_QUESTIONS ? "Finalizar" : "Próxima"}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                    <p className="text-center text-sm text-gray-400 mt-4 md:hidden">
                                        Ou pressione Enter para avançar
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Lead Capture Step */}
                        {currentStep === TOTAL_QUESTIONS + 1 && (
                            <motion.div
                                key="lead-capture"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="pt-10"
                            >
                                <LeadCapture onSubmit={handleLeadSubmit} loading={loading} />
                            </motion.div>
                        )}

                        {/* Final Result Step */}
                        {currentStep === TOTAL_QUESTIONS + 2 && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="pt-10"
                            >
                                <DiagnosisExpressResult />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default DiagnosisExpressWizard;
