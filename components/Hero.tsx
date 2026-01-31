import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../lib/i18n';
import { motion, Variants } from 'framer-motion';
import { Circle, ArrowRight } from 'lucide-react';
import { ImageTrail } from './ui/image-trail';

// Imagens para a galeria interativa
const PROJECT_IMAGES = [
    "/assets/hero/ywlab2.webp",
    "/assets/hero/Business Card Mockup 2.webp",
    "/assets/hero/bárbarasantos.webp",
    "/assets/hero/47.webp",
    "/assets/hero/54.webp",
    "/assets/hero/cultive.webp",
    "/assets/hero/persist.webp"
];

const Hero: React.FC = () => {
    const { t } = useLanguage();

    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isHovering = useRef(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!isHovering.current) isHovering.current = true;

            // Spotlight Effect
            if (titleRef.current) {
                const rect = titleRef.current.getBoundingClientRect();
                const localX = e.clientX - rect.left;
                const localY = e.clientY - rect.top;

                titleRef.current.style.setProperty('--mouse-x', `${localX}px`);
                titleRef.current.style.setProperty('--mouse-y', `${localY}px`);
            }
        };

        const onMouseLeave = () => {
            isHovering.current = false;
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', onMouseMove, { passive: true });
            container.addEventListener('mouseleave', onMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', onMouseMove);
                container.removeEventListener('mouseleave', onMouseLeave);
            }
        };
    }, []);

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-brand-green"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-[#0a6642] to-[#06422b]" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none tech-grid-dark" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06422b]/40 via-transparent to-black/10 pointer-events-none z-[1]" />

            {/* Trail Layer */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <ImageTrail
                    containerRef={containerRef}
                    interval={150}
                    rotationRange={20}
                    animationSequence={[
                        [{ scale: 1, opacity: 0.8 }, { duration: 0.1, ease: "circOut" }],
                        [{ scale: 0.8, opacity: 0 }, { duration: 1.2, ease: "easeOut" }],
                    ] as any}
                >
                    {PROJECT_IMAGES.map((src, index) => (
                        <div key={index} className="w-[200px] aspect-[16/10] rounded-lg overflow-hidden shadow-2xl bg-brand-black/80 backdrop-blur-sm border border-white/10">
                            <img
                                src={src}
                                alt="Project Trail"
                                width="200"
                                height="125"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                    ))}
                </ImageTrail>
            </div>

            <div className="relative z-20 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Content Wrapper */}
                    <div className="w-full flex flex-col items-center py-12 md:py-20 cursor-default">
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 backdrop-blur-sm pointer-events-none"
                        >
                            <Circle className="h-2 w-2 fill-brand-light" />
                            <span className="text-sm text-white/80 tracking-wide font-medium">
                                {t('hero.badge')}
                            </span>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="relative inline-block group">
                                <h1 className="text-[6.5rem] leading-[0.8] sm:text-8xl md:text-9xl font-serif font-normal mb-8 tracking-tighter text-white/90">
                                    marcos<br className="block sm:hidden" />maciell
                                </h1>

                                <h1
                                    ref={titleRef}
                                    className="absolute top-0 left-0 w-full h-full text-[6.5rem] leading-[0.8] sm:text-8xl md:text-9xl font-serif font-normal tracking-tighter text-brand-light pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        maskImage: 'radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)',
                                        WebkitMaskImage: 'radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)'
                                    }}
                                >
                                    marcos<br className="block sm:hidden" />maciell
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="pointer-events-none"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light tracking-wide max-w-[280px] sm:max-w-xl mx-auto px-0 md:px-4">
                                {t('hero.description')}
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="pt-0 relative z-30"
                    >
                        <a href="#contato" className="relative group inline-flex items-center justify-center gap-3 px-10 py-5 overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-brand-light/50">
                            <span className="absolute w-0 h-0 transition-all duration-[1500ms] ease-in-out bg-brand-light rounded-full group-hover:w-[35rem] group-hover:h-[35rem]"></span>

                            <span className="relative flex items-center gap-3 text-lg font-medium text-white group-hover:text-brand-green transition-colors duration-700 z-10">
                                {t('hero.cta')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;