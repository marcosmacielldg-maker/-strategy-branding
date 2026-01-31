import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

// --- Animated Word Component ---
const AnimatedWord = () => {
    const { t } = useLanguage();
    // Dynamic words from translations
    const words = [
        t('journey.words.authentic'),
        t('journey.words.strategic'),
        t('journey.words.memorable'),
        t('journey.words.consistent')
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Slower interval for better readability

        return () => clearInterval(interval);
    }, [words.length]); // Added dependency

    return (
        <span className="inline-grid grid-cols-1 grid-rows-1 align-baseline h-[1.2em] w-[120px] md:w-[220px] text-center mx-1 md:mx-2 relative group translate-y-1">
            {/* Underline separate from text to avoid clipping */}
            <span className="absolute bottom-1 left-0 w-full h-[2px] bg-brand-green/30" />

            <AnimatePresence>
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="col-start-1 row-start-1 text-brand-light font-serif italic px-1 z-10 w-full"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const GlowingCTA = () => {
    const { t } = useLanguage();
    return (
        <a
            href="#contato"
            className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:border-brand-light/50 hover:shadow-[0_0_40px_-10px_rgba(69,242,161,0.3)] hover:-translate-y-1"
        >
            {/* Hover Glow Effect inside */}
            <div className="absolute inset-0 bg-brand-light/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />

            <span className="relative z-10 text-lg font-medium text-white group-hover:text-brand-light transition-colors duration-300">
                {t('journey.cta')}
            </span>

            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-brand-light group-hover:text-brand-green transition-all duration-300">
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </span>
        </a>
    );
};

const Journey: React.FC = () => {
    const { t } = useLanguage();
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Mouse Move Logic for Spotlight
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Animação de Overlay: Escurece levemente conforme desce
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.7]);

    // Animação de Texto: Fade In/Up suave
    const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <section
            id="jornada"
            ref={targetRef}
            className="relative h-[220vh] bg-brand-black"
        >
            <div ref={containerRef} className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex items-center justify-center">

                {/* 1. Background Layer */}
                <motion.div
                    className="absolute inset-0 w-full h-full z-0"
                >
                    <div className="absolute inset-0 bg-brand-black/20 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop"
                        alt="Mountain Journey"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />

                    {/* Mouse Follow Spotlight Effect */}
                    <div
                        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
                        }}
                    />
                </motion.div>

                {/* 2. Atmosphere Overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-black/60 to-brand-black z-10 pointer-events-none"
                />

                {/* 3. Grain Texture */}
                <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* 4. Content Container */}
                <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center max-w-7xl mx-auto w-full">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center gap-16 md:gap-24 will-change-transform"
                    >
                        {/* Headline Principal */}
                        <div className="flex flex-col items-center gap-10">
                            <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9] drop-shadow-2xl text-center">
                                {t('journey.headline')} <br />
                                <span className="block mt-2 text-white/90">
                                    {t('journey.subheadline')}
                                </span>
                            </h2>
                        </div>

                        <h3 className="text-xl md:text-4xl text-white/90 font-light leading-relaxed max-w-6xl text-center mx-auto">
                            {t('journey.tagline.prefix')} <AnimatedWord /> {t('journey.tagline.suffix')}
                        </h3>

                        {/* CTA */}
                        <div className="pt-8">
                            <GlowingCTA />
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Journey;