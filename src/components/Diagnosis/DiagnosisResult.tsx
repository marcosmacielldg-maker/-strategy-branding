import React from 'react';
import { motion } from 'framer-motion';
import { DiagnosisResult as ResultType } from './questions';
import { MessageCircle, CheckCircle2, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DiagnosisResultProps {
    result: ResultType;
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ result }) => {
    return (
        <div className="w-full max-w-4xl mx-auto text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 md:p-14 shadow-2xl shadow-gray-200/50 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-80" />

                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-8">
                    <Trophy className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Seu Momento Atual</span>
                </div>

                <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${result.color} tracking-tight`}>
                    {result.title}
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                    {result.description}
                </p>

                <div className="bg-emerald-50/50 rounded-2xl p-8 mb-10 text-left border border-emerald-100">
                    <h4 className="flex items-center gap-3 text-emerald-700 font-bold mb-3 text-lg">
                        <CheckCircle2 className="w-6 h-6" />
                        Recomendação Estratégica:
                    </h4>
                    <p className="text-gray-700 text-lg">
                        {result.recommendation}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href={`https://api.whatsapp.com/send?phone=5511948635387&text=Olá! Fiz o diagnóstico de marca e meu resultado foi: ${result.title}. Gostaria de saber mais sobre como avançar.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-600 transition-all hover:scale-105 shadow-xl shadow-brand-green/20"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Falar com Especialista
                    </a>

                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-white text-gray-600 font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                        Voltar para o Início
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default DiagnosisResult;
