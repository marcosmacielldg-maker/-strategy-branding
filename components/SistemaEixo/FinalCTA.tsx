import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════════
   FINAL CTA — Fechamento Cinematográfico
   Fundo creme, parallax com texto gigante
   Fechar o arco visual com a Hero
═══════════════════════════════════════════════ */

const FinalCTA: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0.7, 1], [60, -60]);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-24 md:py-36 px-4 md:px-8 lg:px-16 bg-[#F5F2ED] relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[70vh]">

            {/* Parallax watermark text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <motion.div
                    style={{ y: yTransform }}
                    className="font-serif text-[10rem] md:text-[18rem] lg:text-[24rem] font-light italic text-black/[0.03] select-none whitespace-nowrap leading-none tracking-tighter"
                >
                    EIXO
                </motion.div>
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto relative z-10 flex flex-col items-center"
            >
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-brand-green/20 bg-brand-green/5 mb-10">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-xs font-semibold tracking-widest text-brand-green uppercase">Próximo passo</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-[-0.04em] text-[#111] leading-[1.04] mb-8">
                    Sua marca está pronta{' '}
                    <br className="hidden md:block" />
                    para{' '}
                    <em className="font-serif font-normal italic bg-gradient-to-r from-brand-green to-[#0c774e] bg-clip-text text-transparent">
                        escalar
                    </em>{' '}
                    o seu valor?
                </h2>

                <p className="text-lg md:text-xl font-light text-[#666] leading-relaxed mb-12 max-w-2xl mx-auto">
                    Empresas que entregam muito precisam de uma marca que transmita o mesmo peso. O Sistema EIXO™ é para quem quer parar de perder negócios e justificar o seu preço final.
                </p>

                <a
                    href="#proposta"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#111] text-white font-semibold rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
                >
                    <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    <span className="relative z-10 text-sm tracking-wide group-hover:text-[#111] transition-colors duration-300">
                        Quero Posicionar Minha Marca
                    </span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-[#111] transition-colors duration-300 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Logo final */}
                <motion.div
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        src="/logo-oficial-preto.svg"
                        alt="Sistema EIXO Oficial"
                        className="h-10 md:h-12 w-auto mx-auto mt-24 mix-blend-darken"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FinalCTA;
