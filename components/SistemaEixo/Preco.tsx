import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

/* ═══════════════════════════════════════════════
   PREÇO — O Investimento
   Fundo escuro com card central em destaque
   Fundo contrastante cinematográfico
═══════════════════════════════════════════════ */

const lista = [
    'Identidade Visual completa',
    'Manual de Marca (BrandBook)',
    '2x Imersões de marca',
    'Pitch / Apresentação Comercial',
    'Diagnóstico e posicionamento',
    'Landing Page estratégica',
    'Identidade verbal da marca',
    '3 Consultorias pós-projeto',
    'Aplicações e materiais',
    'Metodologia RITMO™ (8 sem.)',
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Preco: React.FC = () => {
    return (
        <section
            id="proposta"
            className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#111] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/[0.05]"
        >
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] bg-brand-green/[0.04] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 w-full">

                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">O Investimento</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-white leading-[1.08] mb-6">
                        Invista na marca{' '}
                        <br className="hidden md:block" />
                        que sua empresa{' '}
                        <em className="font-serif font-normal italic text-brand-green">merece.</em>
                    </h2>
                    <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed max-w-2xl mx-auto">
                        Uma única decisão que muda a forma como o mercado enxerga o seu valor — projetada para faturar como grandes players.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/[0.02] border border-brand-green/20 rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
                >
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/[0.05] rounded-full blur-[60px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                        {/* Left: Price */}
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/5 text-xs font-mono tracking-widest text-brand-green uppercase mb-8">
                                Sistema EIXO™ — Completo
                            </span>

                            <div className="font-sans text-[4rem] md:text-[5.5rem] font-light text-white leading-none mb-4 flex items-start">
                                <span className="text-xl md:text-3xl mt-3 mr-2 text-brand-green font-light">R$</span>
                                <span className="tracking-[-0.04em]">18.000</span>
                            </div>

                            <p className="text-white/40 font-light text-sm mb-8">
                                ou em até{' '}
                                <strong className="text-white/70 font-medium">12x no cartão</strong>
                            </p>

                            <a
                                href="https://wa.me/5511999999999?text=Olá%20Marcos%2C%20quero%20solicitar%20uma%20proposta%20para%20o%20Sistema%20EIXO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-white font-semibold rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(12,119,78,0.3)] w-full text-center"
                            >
                                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                <span className="relative z-10 text-sm tracking-wide">Solicitar Proposta pelo WhatsApp</span>
                            </a>

                            <p className="text-white/30 font-light text-xs mt-4 text-center">
                                Atendimento exclusivo. Vagas limitadas por período.
                            </p>
                        </div>

                        {/* Right: List */}
                        <div>
                            <p className="text-white/50 font-light text-sm uppercase tracking-widest mb-6">Tudo incluso:</p>
                            <ul className="flex flex-col gap-4">
                                {lista.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70 font-light text-sm md:text-base">
                                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Preco;
