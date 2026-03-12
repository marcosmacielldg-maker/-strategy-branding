import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenTool, LayoutTemplate } from 'lucide-react';

/* ═══════════════════════════════════════════════
   SOLUÇÃO — O Sistema EIXO™
   Fundo: #fafafa / off-white
   3 frentes em cards cinematográficos
═══════════════════════════════════════════════ */

const frentes = [
    {
        num: '01',
        title: 'Inteligência de Posicionamento',
        desc: 'Diagnóstico de marca, análise mercadológica, arquétipos e definição do seu território único no mercado.',
        icon: Target,
    },
    {
        num: '02',
        title: 'Arquitetura Visual',
        desc: 'Logotipo, sistema de cores, tipografia e diretrizes claras que orientam cada decisão criativa futura.',
        icon: PenTool,
    },
    {
        num: '03',
        title: 'Arsenal de Conversão',
        desc: 'Landing page estratégica, pitch de vendas e materiais que facilitam o fechamento de negócios.',
        icon: LayoutTemplate,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Solucao: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto">

                {/* Header row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-20 lg:mb-24">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-wrap items-start gap-4 md:gap-6 mb-4">
                            <div className="flex flex-col gap-2 pt-1">
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green text-white text-[11px] font-semibold tracking-widest uppercase">
                                    A Solução
                                </span>
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/15 text-[#444] text-[11px] font-medium tracking-widest uppercase">
                                    Sistema Eixo
                                </span>
                            </div>
                            <h2 className="font-serif font-normal text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] tracking-[-0.04em] leading-[0.92] text-[#111] flex-1 min-w-0">
                                A Solução
                            </h2>
                        </div>

                        <p className="text-xl md:text-2xl font-light tracking-[-0.02em] text-[#333] mt-4">
                            O Sistema EIXO™ não é design.{' '}
                            <em className="font-serif italic text-brand-green font-normal">É estratégia.</em>
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-lg">
                            O EIXO é a peça que faz a engrenagem girar sem quebrar. Alinhamos identidade visual, posicionamento e materiais comerciais em um sistema único — para que sua marca transmita o tamanho real do seu negócio.
                        </p>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {frentes.map((frente, i) => {
                        const Icon = frente.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.12 }}
                                className="group relative bg-white border border-black/[0.06] rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-brand-green/20 hover:-translate-y-1 flex flex-col overflow-hidden"
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#fafafa] border border-black/[0.05] flex items-center justify-center text-[#333] group-hover:bg-brand-green/10 group-hover:text-brand-green group-hover:border-brand-green/20 transition-all duration-500">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-semibold tracking-widest text-[#bbb] group-hover:text-brand-green transition-colors duration-500 font-mono">
                                        {frente.num}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-medium text-[#111] tracking-[-0.02em] mb-4 leading-tight">
                                    {frente.title}
                                </h3>
                                <p className="text-sm md:text-base font-light text-[#666] leading-relaxed mt-auto">
                                    {frente.desc}
                                </p>

                                {/* Accent bottom line */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-green to-[#34d399] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-[2rem]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Solucao;
