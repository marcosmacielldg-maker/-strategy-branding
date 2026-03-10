import React from 'react';
import { motion } from 'framer-motion';

const Preco: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const lista = [
        "Identidade Visual completa",
        "Manual de Marca (BrandBook)",
        "3x Imersões de marca",
        "Pitch / Apresentação Comercial",
        "Diagnóstico e posicionamento",
        "Landing Page estratégica",
        "Identidade verbal da marca",
        "3 Consultorias pós-projeto",
        "Aplicações e materiais",
        "Metodologia RITMO™ (8 sem.)"
    ];

    return (
        <section id="proposta" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#111] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/[0.06]">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[800px] h-[800px] bg-[#45f2a1]/[0.03] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] text-white tracking-tight mb-6">
                        Invista na marca <br className="hidden md:block" />
                        que sua empresa <span className="italic font-light text-[#45f2a1]">merece</span>.
                    </h2>
                    <p className="font-sans text-lg md:text-xl font-light text-white/50 leading-relaxed max-w-2xl mx-auto mb-16 md:mb-20">
                        Uma única decisão que muda a forma como o mercado inteiro enxerga o seu valor — projetada para faturar como grandes <i>players</i>.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/[0.02] backdrop-blur-md border border-[#45f2a1]/20 p-8 md:p-12 lg:p-16 relative rounded-3xl"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#45f2a1]/30 bg-[#45f2a1]/5 text-[10px] md:text-xs font-mono tracking-widest text-[#45f2a1] uppercase mb-10">
                        Sistema EIXO™ — Completo
                    </span>

                    <div className="font-serif text-[4rem] md:text-[6rem] lg:text-[7rem] font-bold text-white leading-none mb-4 flex items-start justify-center">
                        <span className="text-2xl md:text-4xl mt-4 max-md:mt-2 mr-2 text-[#45f2a1] font-light">R$</span>
                        6.500
                        <span className="text-2xl md:text-4xl mt-4 max-md:mt-2 ml-1 font-light">,00</span>
                    </div>

                    <div className="font-sans text-[10px] md:text-xs font-light text-white/40 tracking-[0.2em] uppercase mb-12">
                        Valor à vista · Parcelamento disponível sob consulta
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-3xl mx-auto mb-12 md:mb-16">
                        {lista.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-sm md:text-base font-light text-white/80 font-sans border-b border-white/[0.04] pb-4 last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[#45f2a1]/10 border border-[#45f2a1]/50 rounded-sm">
                                    <svg viewBox="0 0 12 12" className="w-3 h-3 text-[#45f2a1]">
                                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <a href="https://wa.me/5511999999999?text=Olá%20Marcos%2C%20quero%20solicitar%20uma%20proposta%20para%20o%20Sistema%20EIXO"
                        target="_blank" rel="noopener noreferrer"
                        className="group relative overflow-hidden inline-flex w-full md:w-auto items-center justify-center bg-[#45f2a1] text-[#111] font-sans font-bold text-sm md:text-base tracking-widest uppercase px-12 py-5 md:py-6 rounded-full transition-transform duration-300 hover:scale-[1.03] shadow-[0_0_40px_rgba(69,242,161,0.15)]">
                        <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                        <span className="relative z-10 transition-colors duration-300">Solicitar Proposta Agora</span>
                    </a>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 text-white/30 font-sans text-xs font-light uppercase tracking-[0.2em] mt-10 md:mt-12"
                >
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Pagamento 100% seguro
                    </span>
                    <span className="hidden md:block">·</span>
                    <span>Processo claro e documentado</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Preco;
