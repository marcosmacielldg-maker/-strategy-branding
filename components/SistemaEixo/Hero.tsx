import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';
import { cn } from '../../lib/utils';

/* ═══════════════════════════════════════════════
   HERO — Sistema EIXO™
   Estética: Fiel ao último sprint de design
   Grid fino, Logo Outline Topo, Tipografia Centrada
═══════════════════════════════════════════════ */

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -150]);
    // Parallax subindo sutilmente pro logo do fundo
    const logoTranslate = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section className="relative w-full min-h-svh bg-[#Faf9f6] overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
            {/* Grid Background Texture Fino */}
            <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
            }} />

            {/* Radial glow accent sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[#45f2a1]/[0.015] rounded-full blur-[120px] pointer-events-none" />

            {/* Logo Gigante Fundo (Base original do print anterior / mantida sutil se quiser) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[5]">
                <motion.img
                    style={{ y: logoTranslate }}
                    src="/logo-oficial-preto.svg" // Permanece como marca d'agua sutil no fundo
                    alt="EIXO Marca d'água"
                    className="w-[120%] md:w-[85%] lg:w-[70%] max-w-[1400px] opacity-[0.02]"
                />
            </div>


            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-[1000px] mx-auto flex flex-col items-center flex-1 justify-center">

                {/* Top Logo - Fiel ao ultimo print (Branco Vazado/Outline) */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <img
                        src="/logo-oficial-outline.svg" // O logo vazado no topo
                        alt="Sistema Eixo"
                        className="h-8 md:h-10 opacity-15 mx-auto"
                        style={{ filter: 'invert(1)' }} // Invertido pois o fundo é claro e o outline é branco (?)
                    />
                </motion.div>

                {/* Pill Tag */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#45f2a1]/40 bg-transparent mb-12"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#188c5a]" />
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#188c5a] uppercase">
                        Metodologia Exclusiva B2B
                    </span>
                </motion.div>

                {/* Main Headline - Fiel às quebras exatas do print */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-light leading-[1] tracking-[-0.04em] text-[#111] mb-8"
                >
                    Sua empresa cresceu. <br />
                    Sua marca <em className="font-serif italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#45f2a1] to-[#188c5a]">ainda não.</em>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[17px] md:text-xl font-light text-[#666] leading-relaxed max-w-2xl mx-auto mb-14 px-4"
                >
                    O modelo definitivo para empresas B2B que precisam alinhar sua autoridade visual ao tamanho do seu faturamento — e parar de perder negócios na percepção.
                </motion.p>

                {/* CTAs Row - Botão Escuro ao Lado da Pill Cinza Claro */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
                >
                    {/* Primary CTA (Botão verde ou escuro, print estava escuro) */}
                    <a
                        href="#proposta"
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111] text-white rounded-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-[#222] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 text-[14px] md:text-[15px] font-medium tracking-wide">
                            Quero escalar minha marca
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    {/* Trust Indicator Pill - Fiel ao vazado */}
                    <div className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-black/10 bg-transparent text-[14px] md:text-[15px] font-light text-[#555] w-full sm:w-auto">
                        +15 Projetos Estratégicos Entregues
                    </div>
                </motion.div>

            </div>

            {/* Conheça o sistema scroll indicator - Abaixo de tudo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#888]">
                    Conheça o sistema
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-[#aaa] animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
