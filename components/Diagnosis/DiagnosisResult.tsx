import React from 'react';
import { motion } from 'framer-motion';
import { DiagnosisResult as ResultType } from './questions';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiagnosisResultProps {
    result: ResultType;
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ result }) => {
    return (
        <div className="w-full max-w-3xl mx-auto text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-80" />

                <h3 className="text-gray-500 uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 font-bold">Seu Momento Atual</h3>

                <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 ${result.color} tracking-tight`}>
                    {result.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                    {result.description}
                </p>

                <div className="bg-emerald-50 rounded-xl p-5 md:p-6 mb-6 md:mb-8 text-left border border-emerald-100">
                    <h4 className="flex items-center gap-3 text-emerald-800 font-bold mb-2 md:mb-3">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                        Recomendação Estratégica:
                    </h4>
                    <p className="text-gray-800 text-sm md:text-base">
                        {result.recommendation}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
                    <a
                        href={`https://api.whatsapp.com/send?phone=5511948635387&text=Olá! Fiz o diagnóstico de marca e meu resultado foi: ${result.title}. Gostaria de saber mais sobre como avançar.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:bg-emerald-600 transition-transform hover:scale-105 shadow-lg shadow-brand-green/20"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Falar com Especialista
                    </a>

                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-gray-50 text-gray-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                        Voltar para o Início
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default DiagnosisResult;
