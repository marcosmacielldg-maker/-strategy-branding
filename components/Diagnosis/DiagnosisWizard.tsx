import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { questions, getDiagnosis, DiagnosisResult as ResultType } from './questions';
import { sendEmail, sendToWebhook, WEBHOOK_DIAGNOSIS, EMAILJS_TEMPLATE_DIAGNOSIS_ID } from '../../lib/integrations';
import MountainProgress from './MountainProgress';
import QuestionCard from './QuestionCard';
import LeadCapture from './LeadCapture';
import DiagnosisResult from './DiagnosisResult';
import { TopographicPattern, MountainSilhouette } from './BackgroundElements';
import { Link } from 'react-router-dom';

const DiagnosisWizard: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0); // 0 = Intro, 1-7 = Questions, 8 = Lead Capture, 9 = Result
    const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
    const [result, setResult] = useState<ResultType | null>(null);
    const [loading, setLoading] = useState(false);

    // Constants
    const TOTAL_QUESTIONS = questions.length;

    const handleStart = () => {
        setCurrentStep(1);
        window.scrollTo(0, 0);
    };

    const handleAnswer = (optionId: 'A' | 'B' | 'C') => {
        setAnswers({ ...answers, [currentStep]: optionId });
        if (currentStep < TOTAL_QUESTIONS) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300);
        } else {
            setTimeout(() => setCurrentStep(currentStep + 1), 300); // Go to Lead Capture
        }
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleLeadSubmit = async (name: string, email: string, phone: string) => {
        setLoading(true);

        // Calculate result
        const diagnosis = getDiagnosis(answers);
        setResult(diagnosis);

        // Prepare data for automation
        const data = {
            name,
            email,
            phone,
            answers: JSON.stringify(answers),
            diagnosis_title: diagnosis.title,
            diagnosis_recommendation: diagnosis.recommendation,
            source: 'Diagnosis Wizard',
            status: 'success'
        };

        try {
            // Send to Webhook (CRM) and EmailJS (Notification) in parallel
            const tasks: Promise<any>[] = [
                sendToWebhook(WEBHOOK_DIAGNOSIS, data)
            ];

            tasks.push(sendEmail(data, EMAILJS_TEMPLATE_DIAGNOSIS_ID));

            await Promise.allSettled(tasks);
        } catch (error) {
            console.error("Error sending diagnosis data:", error);
            // We proceed to result anyway
        }

        console.log("Lead Captured:", { ...data, diagnosis });

        setLoading(false);
        setCurrentStep(currentStep + 1); // Go to Result
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
                                className="flex items-center gap-2 text-gray-500 hover:text-brand-green transition-colors font-medium"
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
                                Diagnóstico Estratégico Gratuito
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 !text-black tracking-tight leading-tight">
                                Qual é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">próximo nível</span> da sua marca?
                            </h1>
                            <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                                Responda a 7 perguntas rápidas e descubra o que está impedindo sua marca de escalar e qual a estratégia ideal para o seu momento.
                            </p>
                            <button
                                onClick={handleStart}
                                className="bg-brand-green text-white font-bold text-lg py-5 px-12 rounded-full hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl shadow-brand-green/20"
                            >
                                Começar a Escalada 🏔️
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
                            <QuestionCard
                                question={questions[currentStep - 1]}
                                onSelect={handleAnswer}
                            />
                        )}

                        {/* Lead Capture Step */}
                        {currentStep === TOTAL_QUESTIONS + 1 && (
                            <LeadCapture onSubmit={handleLeadSubmit} loading={loading} />
                        )}

                        {/* Final Result Step */}
                        {(currentStep === TOTAL_QUESTIONS + 2 && result) && (
                            <DiagnosisResult result={result} />
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default DiagnosisWizard;
