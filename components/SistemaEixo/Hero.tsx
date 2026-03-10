import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#fafafa] text-[#111] font-sans selection:bg-[#45f2a1]/20 selection:text-[#0c774e]">

            {/* Subtle grid pattern inherited from Onboarding */}
            <AnimatedGridPattern
                numSquares={20}
                maxOpacity={0.05}
                duration={6}
                repeatDelay={2}
                className={cn(
                    "fill-black/5 stroke-black/[0.04]",
                    "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-10%] h-[120%] skew-y-3",
                )}
            />

            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#45f2a1]/[0.03] rounded-full blur-[120px]" />
            </div>

            {/* Content centered */}
            <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-5xl mx-auto flex flex-col items-center pt-20">

                {/* Logo and Badge Row */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-5 mb-12 md:mb-16"
                >
                    <img
                        src="/logo-eixo-claro.svg"
                        alt="Sistema Eixo"
                        className="h-8 md:h-10 w-auto opacity-90 filter invert mix-blend-difference" // Invert for light bg if original is white. (Original is 'claro' so it's probably white)
                    // Actually, if it's 'logo-eixo-escuro.svg' it might be black. Let's try logo-eixo-escuro instead.
                    />
                </motion.div>

                {/* Badge "Marcos Maciell" */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-8 md:mb-10 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-[#111]" />
                    <span className="text-xs font-semibold tracking-widest text-[#111] uppercase">Marcos Maciell</span>
                </motion.div>

                {/* Headline Monumental */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-serif text-[4rem] sm:text-6xl md:text-[6.5rem] lg:text-[7.5rem] font-bold leading-[0.95] text-[#111] mb-8 md:mb-10 tracking-tight"
                >
                    Sua empresa<br />
                    cresceu. Sua marca<br />
                    ainda <span className="italic relative inline-block">não.<span className="absolute bottom-2 md:bottom-4 left-0 w-full h-[4px] md:h-[6px] bg-[#45f2a1] z-[-1]" /></span>
                </motion.h1>

                {/* Subtitle / Description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="text-[17px] sm:text-lg md:text-xl text-[#555] max-w-[340px] sm:max-w-xl mx-auto mb-12 md:mb-16 font-light leading-[1.5] md:leading-relaxed"
                >
                    O <strong className="font-semibold text-[#111]">Sistema EIXO™</strong> é a espinha dorsal comercial para empresas B2B em expansão que precisam de autoridade visual, posicionamento estratégico e materiais que fecham negócios.
                </motion.p>

                {/* CTA & Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <a
                        href="#proposta"
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#111] text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                    >
                        <div className="absolute inset-0 bg-[#45f2a1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                        <span className="relative z-10 text-sm tracking-widest uppercase group-hover:text-[#111] transition-colors duration-300">Solicitar Proposta</span>
                    </a>
                    <span className="text-sm font-light text-[#666] font-sans">
                        Mais de <strong className="text-[#111] font-medium">15 projetos</strong> no Brasil e exterior
                    </span>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#999]"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
