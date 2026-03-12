import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════
   MÉTODO — Header Verde Isolado
   Fundo verde escuro com a tagline serif em verde claro
   Logo Ocultado do fundo para melhor leitura.
═══════════════════════════════════════════════ */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Metodo: React.FC = () => {
    return (
        <section className="relative py-32 md:py-48 px-5 bg-[#1B3B2B] overflow-hidden flex flex-col items-center justify-center">

            {/* Opcional: Linhas arcos do fundo da referência original */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    <circle cx="0" cy="0" r="40" fill="none" stroke="white" strokeWidth="0.2" />
                    <circle cx="100" cy="0" r="40" fill="none" stroke="white" strokeWidth="0.2" />
                    <circle cx="0" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.2" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.2" />
                </svg>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Tagline superior */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#45f2a1] text-[10px] md:text-[11px] font-semibold tracking-widest uppercase backdrop-blur-sm">
                        Método Sistema Eixo
                    </span>
                </motion.div>

                {/* Headline Principal — Serif + Sublinhados */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="font-serif font-normal text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] md:leading-[1.15] text-[#b4ecd3] tracking-[-0.03em]"
                >
                    <span className="relative inline-block pb-1 md:pb-2">
                        Ordem, autoridade
                        <div className="absolute bottom-0 left-0 w-full h-[3px] md:h-[5px] bg-[#45f2a1]" />
                    </span>
                    <br className="hidden md:block" />
                    <span className="mx-2 md:hidden"> </span>
                    {"e "}
                    <span className="relative inline-block pb-1 md:pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#45f2a1] to-[#188c5a]">
                        eficiência comercial,
                        <div className="absolute bottom-0 left-0 w-full h-[3px] md:h-[5px] bg-[#45f2a1]" />
                    </span>
                    <br />
                    <em className="font-serif italic text-white/90">
                        você lembra?
                    </em>
                </motion.h2>
            </div>
        </section>
    );
};

export default Metodo;
