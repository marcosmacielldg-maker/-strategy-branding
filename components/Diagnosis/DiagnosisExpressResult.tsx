import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiagnosisExpressResult: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
        >
            <div className="bg-brand-green p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-xl relative z-10"
                >
                    <CheckCircle2 className="w-12 h-12 text-brand-green" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10 tracking-tight">
                    Diagnóstico Enviado!
                </h2>
                <p className="text-xl md:text-2xl opacity-90 font-light relative z-10 max-w-2xl mx-auto">
                    Agradecemos por compartilhar as informações da sua marca.
                </p>
            </div>

            <div className="p-8 md:p-12 text-center">
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
                    Nossa equipe vai analisar suas respostas e entender exatamente onde sua marca está e como podemos levá-la ao <strong>próximo nível</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
                    Entraremos em contato muito em breve através do WhatsApp com os próximos passos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Voltar para a Home
                    </Link>
                    <a
                        href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20acabei%20de%20preencher%20o%20Diagn%C3%B3stico%20Express!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-green text-white font-bold py-4 px-8 rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-brand-green/20"
                    >
                        Falar no WhatsApp Agora
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default DiagnosisExpressResult;
