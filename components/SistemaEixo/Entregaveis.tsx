import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════
   ENTREGÁVEIS — Editorial Style
   Referência: design com título serif display gigante,
   pill tags, cards limpos com ícones ilustrativos
   e cards destaque em verde para os bônus
═══════════════════════════════════════════════ */

const entregas = [
    {
        num: '01',
        title: '2x Imersões de Marca',
        desc: 'Sessões estratégicas para extrair o máximo do seu negócio e definir os caminhos com clareza.',
        icon: '🏛️',
        destaque: false,
    },
    {
        num: '02',
        title: 'Seleção Arquetípica',
        desc: 'Definição da sua tríade arquetípica — para posicionamento e diferenciação real no mercado.',
        icon: '🔬',
        destaque: false,
    },
    {
        num: '03',
        title: 'Benchmarking',
        desc: 'Análise mercadológica profunda para orientar decisões competitivas com precisão e estratégia.',
        icon: '♟️',
        destaque: false,
    },
    {
        num: '04',
        title: 'Identidade Visual',
        desc: 'Logotipo, tipografia, sistema de cores, elementos de composição, família tipográfica, padrões, etc.',
        icon: '🏺',
        destaque: false,
    },
    {
        num: '05',
        title: 'Identidade Verbal',
        desc: 'Voz de marca, manifesto, tom de voz, palavras-chave, personalidade, bordões, etc.',
        icon: '✒️',
        destaque: false,
    },
    {
        num: '06',
        title: 'Manual de Marca',
        desc: 'Ferramenta para criações futuras de peças de comunicação da empresa, orientações e sugestões.',
        icon: '📐',
        destaque: false,
    },
    {
        num: '07',
        title: 'Landing Page',
        desc: 'Página estratégica de vendas focada em performance para capturar clientes e escalar ticket.',
        icon: '🧭',
        destaque: true,
    },
    {
        num: '08',
        title: 'Pitch de Vendas',
        desc: 'Playbook visual para o time comercial. Uma narrativa de vendas profissional e persuasiva.',
        icon: '🪔',
        destaque: true,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const Entregaveis: React.FC = () => {
    return (
        <section className="py-20 md:py-28 px-5 md:px-10 lg:px-16 bg-white border-y border-black/[0.06]">
            <div className="max-w-7xl mx-auto">

                {/* Header row — pill tags + display title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-wrap items-start gap-6 md:gap-8 mb-14 md:mb-16"
                >
                    {/* Pill tags column */}
                    <div className="flex flex-col gap-2 pt-2">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-green text-white text-[11px] font-semibold tracking-widest uppercase">
                            Entregáveis
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/15 text-[#444] text-[11px] font-medium tracking-widest uppercase">
                            Sistema Eixo
                        </span>
                    </div>

                    {/* Display title */}
                    <h2 className="font-serif font-normal text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] tracking-[-0.04em] leading-[0.9] text-[#111] flex-1 min-w-0">
                        Entregáveis
                    </h2>
                </motion.div>

                {/* Cards grid — 4 colunas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {entregas.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: i * 0.07 }}
                            className={`relative group rounded-[1.25rem] border p-6 md:p-7 transition-all duration-400 hover:-translate-y-0.5 ${item.destaque
                                ? 'bg-brand-green border-brand-green text-white hover:shadow-[0_8px_32px_rgba(12,119,78,0.2)]'
                                : 'bg-white border-black/[0.08] hover:border-brand-green/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                                }`}
                        >
                            {item.destaque && (
                                <span className="absolute top-4 right-4 bg-white/20 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
                                    Novidade
                                </span>
                            )}

                            {/* Icon */}
                            <span className="block text-3xl mb-5 leading-none">
                                {item.icon}
                            </span>

                            {/* Title */}
                            <h4 className={`text-base md:text-[17px] font-medium tracking-[-0.02em] mb-3 leading-tight ${item.destaque ? 'text-white' : 'text-[#111]'}`}>
                                {item.title}
                            </h4>

                            {/* Desc */}
                            <p className={`text-[13px] leading-relaxed font-light ${item.destaque ? 'text-white/80' : 'text-[#777]'}`}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer signature */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-between mt-14 pt-8 border-t border-black/[0.06]"
                >
                    {/* Footer Brand */}
                    <div className="absolute bottom-6 right-6 pointer-events-none mix-blend-darken">
                        <img src="/logo-oficial-preto.svg" alt="Sistema EIXO" className="h-5 w-auto opacity-30" />
                    </div>    <span className="text-[#bbb] text-xl">→</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Entregaveis;
