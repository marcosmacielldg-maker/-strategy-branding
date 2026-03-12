import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════
   DOR — O Problema Real
   Fundo: branco limpo / bg-white
   Tipografia: Sans light + Serif italic para drama
═══════════════════════════════════════════════ */

const dores = [
    {
        num: '01',
        title: 'Marca que não transmite autoridade',
        desc: 'Logo criado no começo, sem estratégia, sem consistência. Dificulta muito justificar e cobrar um ticket premium pelo seu serviço.',
    },
    {
        num: '02',
        title: 'Materiais que não convencem',
        desc: 'Apresentações sem narrativa, propostas sem força visual. O cliente sente que precisa pensar antes de fechar.',
    },
    {
        num: '03',
        title: 'Sem diferenciação clara',
        desc: 'Concorrentes menores com marcas melhores parecem maiores que você. A comunicação fraca não sustenta o seu preço final.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Dor: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-black/[0.06]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 max-w-3xl"
                >
                    <div className="flex flex-wrap items-start gap-4 md:gap-6 mb-6">
                        <div className="flex flex-col gap-2 pt-1">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green text-white text-[11px] font-semibold tracking-widest uppercase">
                                O Problema
                            </span>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/15 text-[#444] text-[11px] font-medium tracking-widest uppercase">
                                Sistema Eixo
                            </span>
                        </div>
                        <h2 className="font-serif font-normal text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] tracking-[-0.04em] leading-[0.92] text-[#111] flex-1 min-w-0">
                            O Problema Real
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl font-light tracking-[-0.02em] text-[#333] mb-6 max-w-2xl">
                        Sua empresa entrega excelência, mas sua marca parece{' '}
                        <em className="font-serif italic text-brand-green font-normal">amadora.</em>
                    </p>

                    <p className="text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-2xl">
                        Você investiu anos construindo um negócio sólido. Seus resultados são reais. Mas quando um cliente potencial visita o site ou recebe sua proposta — a percepção visual destrói a sua autoridade.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {dores.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.12 }}
                            className="relative bg-[#fafafa] border border-black/[0.06] rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.05)] hover:border-brand-green/20 group overflow-hidden"
                        >
                            {/* Decorative number */}
                            <span className="absolute top-6 right-8 font-serif text-7xl font-light text-black/[0.03] pointer-events-none select-none leading-none group-hover:text-brand-green/[0.06] transition-colors duration-500">
                                {item.num}
                            </span>

                            <h4 className="text-xl md:text-2xl font-medium text-[#111] mb-4 mt-6 leading-tight pr-8 tracking-[-0.02em]">
                                {item.title}
                            </h4>

                            <p className="text-sm md:text-base font-light text-[#666] leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Accent bottom line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-green to-[#34d399] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-[2rem]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dor;
