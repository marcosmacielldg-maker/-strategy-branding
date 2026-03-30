import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const DiagnosisCTA: React.FC = () => {
    return (
        <section id="diagnostico-cta" className="bg-white pb-24 pt-16 px-4">
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl shadow-slate-900/20 h-[500px] md:h-[600px] group">

                    {/* Background Image - Full Cover */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
                            alt="Mountain Summit Background"
                            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent md:to-transparent" />
                        <div className="absolute inset-0 bg-slate-900/20 md:hidden" /> {/* Extra darken on mobile */}
                    </div>

                    <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">

                        <div className="max-w-2xl">
                            {/* Tag */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-xs mb-6 shadow-sm"
                            >
                                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                                <span className="text-white drop-shadow-md">Diagnóstico Gratuito</span>
                            </motion.div>

                            {/* Massive Headline */}
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-xl">
                                Qual é o <span className="font-serif italic font-normal text-brand-light">próximo nível</span> da sua marca?
                            </h2>

                            {/* Descriptive Copy */}
                            <p className="text-slate-200 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-lg drop-shadow-lg">
                                Pare de adivinhar. Responda a 7 perguntas rápidas e descubra exatamente o que está impedindo sua marca de escalar.
                            </p>

                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                <Link
                                    to="/diagnostico"
                                    className="relative group inline-flex items-center justify-center gap-3 px-10 py-5 overflow-hidden rounded-full border border-brand-green bg-brand-green transition-all duration-300 hover:border-brand-light shadow-xl shadow-brand-green/30 text-lg"
                                >
                                    <span className="absolute w-0 h-0 transition-all duration-[1500ms] ease-in-out bg-brand-light rounded-full group-hover:w-[45rem] group-hover:h-[45rem]"></span>
                                    <span className="relative flex items-center gap-3 font-medium text-white group-hover:text-brand-black transition-colors duration-700 z-10">
                                        Receber Diagnóstico Gratuito
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <p className="text-sm text-slate-300 font-medium opacity-80 pl-2">
                                    • 100% Gratuito
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiagnosisCTA;
