import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Compass, PenTool, Key } from 'lucide-react';

const etapas = [
    {
        letter: 'R',
        title: 'Reconhecimento',
        desc: 'Imersão profunda no mercado e DNA da marca. Entrevistas estratégicas, análise de concorrência e mapeamento do território de oportunidade.',
        icon: Search,
    },
    {
        letter: 'I',
        title: 'Identidade',
        desc: 'Definição de posicionamento, personalidade e voz de marca. A fundação que orienta todas as decisões criativas.',
        icon: Map,
    },
    {
        letter: 'T',
        title: 'Território',
        desc: 'Moodboards, painel semântico e exploração estética. Definimos o universo visual único da sua empresa.',
        icon: Compass,
    },
    {
        letter: 'M',
        title: 'Materialização',
        desc: 'Criação da Identidade Visual completa: logo, sistema cromático, tipografia e todos os elementos de linguagem visual.',
        icon: PenTool,
    },
    {
        letter: 'O',
        title: 'Orquestração',
        desc: 'Guias de uso, brandbook e aplicações práticas para o time. Sua marca pronta para ser aplicada com consistência em qualquer canal.',
        icon: Key,
    },
];

/* ═══════════════════════════════════════════════
   MÉTODO RITMO 
   Estética Dark Onboarding - Fundo DarkBlue, Degradê verde.
═══════════════════════════════════════════════ */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const MetodoRitmo: React.FC = () => {
    return (
        <section className="relative py-24 md:py-32 px-5 bg-[#111111] overflow-hidden flex flex-col items-center">
            {/* Fundo Dark/Grid sutil */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
            }} />

            {/* Cabeçalho da Seção RITMO */}
            <div className="relative z-10 w-full max-w-5xl mx-auto mb-20 px-4 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="md:w-1/2 mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="text-[11px] md:text-xs font-semibold tracking-widest text-[#45f2a1] uppercase">
                            Passo a Passo
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[2.5rem] md:text-[3.6rem] font-light tracking-tight text-white leading-[1.1]"
                    >
                        Metodologia <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#45f2a1] to-[#188c5a]">RITMO</span>
                    </motion.h2>
                </div>

                <div className="md:w-1/2 md:pl-12 border-l-0 md:border-l border-white/5">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[#94a3b8] font-light text-[17px] md:text-xl leading-relaxed max-w-md"
                    >
                        Cada etapa foi pensada para garantir que todo o projeto seja construído com base em dados, estrutura e estratégia comercial.
                    </motion.p>
                </div>
            </div>

            {/* TIMELINE RITMO - Layout Onboarding (Porém DARK) */}
            <div className="relative z-10 max-w-5xl mx-auto w-full px-4 mt-8 md:mt-12">
                {/* Linha vertical centralizada nos círculos (esquerda) - Branca sutil */}
                <div className="absolute top-0 bottom-0 left-[48px] md:left-[80px] w-px bg-white/[0.04]" />

                <div className="flex flex-col gap-12 relative pb-8">
                    {etapas.map((etapa, idx) => {
                        const Icon = etapa.icon;
                        const numStr = (idx + 1).toString().padStart(2, '0');

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.15 * idx }}
                                className="flex flex-row items-start relative w-full gap-6 md:gap-14"
                            >
                                {/* Esquerda: Ponto com Número */}
                                <div className="relative z-10 flex flex-col items-center mt-2 md:mt-4">
                                    {/* Fundo DarkBlue, texto Branco Clarinho como no Print, porém reverso */}
                                    <div className="w-[64px] h-[64px] md:w-[96px] md:h-[96px] shrink-0 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(69,242,161,0.02)] ml-4 md:ml-8 transition-transform hover:scale-105 duration-500">
                                        <div className="flex flex-col items-center">
                                            <span className="text-white/20 font-light text-2xl md:text-[2rem] leading-none">{numStr}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Direita: Conteúdo Card - Night Mode */}
                                <div className="flex-1 mt-0 max-w-[800px]">
                                    <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.04] transition-all duration-300 relative group">

                                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="text-[#45f2a1] group-hover:scale-110 transition-transform">
                                                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-[22px] md:text-[26px] font-sans text-white font-semibold tracking-tight">{etapa.title}</h3>
                                            </div>

                                            {/* Info Tag */}
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#45f2a1]/10 border border-[#45f2a1]/20 mt-2 md:mt-0 md:ml-4 w-fit">
                                                <span className="text-[11px] font-medium text-[#45f2a1] uppercase tracking-widest flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#45f2a1] animate-pulse" />
                                                    Módulo {etapa.letter}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-[#94a3b8] font-light leading-relaxed text-[16px] md:text-[18px]">
                                            {etapa.desc}
                                        </p>

                                        {/* Pontinhos Verdes extras */}
                                        <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/[0.05] pt-6">
                                            <li className="flex items-center gap-3 text-[14px] text-[#64748b]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#188c5a]/40 group-hover:bg-[#45f2a1] transition-colors"></div>
                                                Entrega do módulo de {etapa.title} validada.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MetodoRitmo;
