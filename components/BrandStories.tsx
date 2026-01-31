import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useAnimationFrame, animate, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Pause, Play, Eye } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../lib/i18n';
import { projects as stories } from '../lib/data'; // Use centralized data logic


// Triplicamos a lista para garantir o loop infinito suave
const carouselItems = [...stories, ...stories, ...stories];

const BrandStories: React.FC = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    const [isHoveringSection, setIsHoveringSection] = useState(false);
    const [isManualPaused, setIsManualPaused] = useState(false);
    const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // -- Logic for Infinite Scroll with Framer Motion --
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(360); // Default desktop width

    // Speed Factor for smooth pause/resume (0 = paused, 1 = playing)
    const speedFactor = useMotionValue(1);
    const targetSpeedFactor = useRef(1);

    // Calculate specific widths including gaps
    // Mobile: 280px width + 24px (px-3 * 2) = 304px
    // Desktop: 360px width + 32px (px-4 * 2) = 392px
    useEffect(() => {
        const updateWidth = () => {
            const isMobile = window.innerWidth < 768;
            setCardWidth(isMobile ? 304 : 392);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const totalContentWidth = cardWidth * stories.length;
    // Determine if we should pause based on interactions
    const shouldPause = isManualPaused || hoveredCardId !== null;

    // Update target speed based on pause state
    useEffect(() => {
        targetSpeedFactor.current = shouldPause ? 0 : 1;
    }, [shouldPause]);

    // Animation Loop - Physics based with smooth damping
    // Animation Loop - Physics based with smooth damping
    // Animation Loop - Standard Linear Infinite Scroll
    // Animation Loop - Pure Linear Movement
    useAnimationFrame((t, delta) => {
        // Only pause if manual pause is active or user is hovering a card
        if (!shouldPause) {
            // Fixed speed: 0.6px per frame (approx 36px/sec at 60fps)
            // We avoid using 'delta' for position multiplication to prevent jumps on frame lag,
            // but we can use it to normalize if needed. For marquee, fixed step is usually smoother.
            const moveBy = 1;

            let newX = x.get() - moveBy;

            // Infinite Loop Logic
            if (newX <= -totalContentWidth) {
                newX += totalContentWidth;
            }

            x.set(newX);
        }
    });

    // Track Active Index based on X position
    useMotionValueEvent(x, "change", (latest) => {
        // Normalize x to be within one set of items (0 to totalContentWidth)
        const positiveX = Math.abs(latest % totalContentWidth);
        const index = Math.round(positiveX / cardWidth) % stories.length;
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    });

    // Manual Navigation Handler
    const handleNavClick = (index: number) => {
        setIsManualPaused(true); // Pause auto-scroll

        // Immediately stop the physics loop to prevents conflicts
        speedFactor.set(0);
        targetSpeedFactor.current = 0;

        // Calculate target position
        // We scroll to the first set's instance of this index for simplicity
        const targetX = -(index * cardWidth);

        // Smooth animate to target
        animate(x, targetX, {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1
        });
    };

    // Custom Cursor Logic
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor, { passive: true });
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    // Função auxiliar para renderizar o conteúdo do botão de status
    const renderStatusContent = () => {
        if (isManualPaused) {
            return (
                <motion.span
                    key="manual-paused"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="absolute inset-0 text-sm font-medium text-brand-black flex items-center gap-2"
                >
                    Pausado <Pause className="w-3.5 h-3.5 ml-auto opacity-50 fill-current" />
                </motion.span>
            );
        }
        if (hoveredCardId) {
            return (
                <motion.span
                    key="hover-paused"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="absolute inset-0 text-sm font-medium text-brand-black flex items-center gap-2"
                >
                    Explorando <Eye className="w-3.5 h-3.5 ml-auto opacity-50" />
                </motion.span>
            );
        }
        return (
            <motion.span
                key="playing"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="absolute inset-0 text-sm font-medium text-brand-green flex items-center gap-2"
            >
                Autoplay ON <Play className="w-3.5 h-3.5 ml-auto fill-current opacity-50" />
            </motion.span>
        );
    };

    return (
        <section
            id="brand-stories"
            className="py-24 md:py-32 bg-brand-gray border-b border-brand-black/5 overflow-hidden relative cursor-none"
            onMouseEnter={() => setIsHoveringSection(true)}
            onMouseLeave={() => {
                setIsHoveringSection(false);
                setHoveredCardId(null);
            }}
        >

            {/* CUSTOM CURSOR */}
            <motion.div
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className={cn(
                    "fixed top-0 left-0 z-50 pointer-events-none hidden md:flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ease-out",
                    hoveredCardId
                        ? "w-28 h-28 bg-brand-green/90 text-white shadow-xl shadow-brand-green/20 border border-brand-light/20"
                        : isHoveringSection
                            ? "w-4 h-4 bg-brand-black text-transparent"
                            : "opacity-0 w-0 h-0"
                )}
            >
                <AnimatePresence mode="wait">
                    {hoveredCardId && (
                        <motion.div
                            key="view"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Explorar</span>
                            <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Header Section */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 mb-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="max-w-3xl">
                        <h2 className="font-serif text-6xl md:text-8xl text-brand-black tracking-tighter leading-[0.9]">
                            {t('stories.title')} <br />
                            <span className="relative inline-block">
                                <span className="italic text-brand-green relative z-10 pr-6">{t('stories.impact')}</span>
                                <span className="absolute bottom-3 left-0 w-full h-3 bg-brand-green/10 -rotate-1 rounded-full z-0" />
                            </span>
                        </h2>

                        <div className="max-w-2xl mt-8">
                            <p className="text-xl md:text-2xl text-brand-black/70 font-light leading-relaxed border-l-2 border-brand-green pl-6 py-2">
                                {t('stories.desc')}
                            </p>
                        </div>
                    </div>

                    {/* STATUS CLIP / CONTROLLER */}
                    <button
                        onClick={() => setIsManualPaused(!isManualPaused)}
                        className={cn(
                            "group relative overflow-hidden rounded-full py-4 px-7 transition-all duration-500 cursor-pointer border backdrop-blur-md hidden md:flex items-center gap-6",
                            shouldPause
                                ? "bg-brand-black/5 border-brand-black/10 pr-9"
                                : "bg-white border-brand-black/5 shadow-sm hover:shadow-md"
                        )}
                    >
                        {/* Equalizer Animation Icon */}
                        <div className="flex items-end gap-[3px] h-5">
                            <div className={cn("w-1.5 bg-brand-green rounded-full transition-all duration-300", shouldPause ? "h-3 bg-brand-black/40" : "animate-equalizer-1 h-4")} />
                            <div className={cn("w-1.5 bg-brand-green rounded-full transition-all duration-300", shouldPause ? "h-4 bg-brand-black/40" : "animate-equalizer-2 h-6")} />
                            <div className={cn("w-1.5 bg-brand-green rounded-full transition-all duration-300", shouldPause ? "h-2 bg-brand-black/40" : "animate-equalizer-3 h-3")} />
                        </div>

                        <div className="flex flex-col items-start min-w-[140px]">
                            <span className="text-xs uppercase tracking-widest font-bold text-brand-black/40 leading-none mb-1.5">{t('stories.status')}</span>
                            <div className="relative h-5 w-full">
                                <AnimatePresence mode="wait">
                                    {renderStatusContent()}
                                </AnimatePresence>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Infinite Carousel Container */}
            <div className="relative w-full py-8 overflow-visible" ref={containerRef}>
                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-brand-gray via-brand-gray/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-brand-gray via-brand-gray/90 to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex w-max pl-6 md:pl-12 cursor-grab active:cursor-grabbing"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ right: 0, left: -totalContentWidth }}
                    onDragEnd={(event, info) => {
                        // Optional: Add logic to snap or resume auto-scroll
                        setIsManualPaused(false);
                    }}
                    onDragStart={() => setIsManualPaused(true)}
                >
                    {carouselItems.map((story, index) => {
                        const uniqueId = `${story.id}-${index}`;
                        const isHovered = hoveredCardId === uniqueId;

                        return (
                            <div
                                key={uniqueId}
                                // Lógica de Hover
                                onMouseEnter={() => setHoveredCardId(uniqueId)}
                                onMouseLeave={() => setHoveredCardId(null)}
                                className="relative px-3 md:px-4 group"
                            >
                                {/* Card Container - REDUCED HEIGHT (aspect 9/10 instead of 9/14) */}
                                <div
                                    onClick={() => navigate(`/project/${story.id}`)}
                                    className={cn(
                                        "relative w-[280px] md:w-[360px] aspect-[9/10] rounded-sm overflow-hidden bg-brand-black select-none cursor-pointer",
                                        "transition-all duration-500 ease-[0.25,1,0.5,1]",
                                        isHovered
                                            ? "scale-105 shadow-2xl shadow-brand-black/20 z-30 translate-y-[-10px] grayscale-0"
                                            : "scale-100 shadow-lg z-10 grayscale-[10%] group-hover:grayscale-[50%] hover:!grayscale-0 opacity-90 hover:opacity-100"
                                    )}
                                >
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        width="360"
                                        height="400"
                                        loading="lazy"
                                        draggable={false}
                                        className={cn(
                                            "w-full h-full object-cover transition-transform duration-1000",
                                            isHovered ? "scale-110" : "scale-100"
                                        )}
                                    />

                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 pointer-events-none",
                                        isHovered ? "opacity-80" : "opacity-40"
                                    )} />

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                        {/* Removed Year Badge from here */}

                                        <div className="relative z-10 transform transition-transform duration-500">
                                            {/* HIERARCHY INVERTED: Client is Main (Top), Service is Sub (Bottom) */}
                                            <h3 className="text-3xl font-serif leading-none mb-3">
                                                {story.client}
                                            </h3>

                                            <p className="text-brand-light text-xs font-bold uppercase tracking-[0.2em] mb-4">
                                                {language === 'en' && (story as any).titleEn ? (story as any).titleEn : story.title}
                                            </p>

                                            <div
                                                className={cn(
                                                    "grid transition-[grid-template-rows] duration-500 ease-in-out",
                                                    isHovered ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                )}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="text-white/70 text-sm leading-relaxed mb-4 border-l border-brand-light/50 pl-3">
                                                        {language === 'en' && (story as any).descriptionEn ? (story as any).descriptionEn : story.description}
                                                    </p>
                                                    <div
                                                        className="flex items-center gap-2 text-brand-light text-xs font-medium uppercase tracking-wider cursor-pointer hover:text-white"
                                                        onClick={() => navigate(`/project/${story.id}`)}
                                                    >
                                                        {t('stories.view_project')} <ArrowUpRight className="w-3 h-3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* NEW: Bottom Navigation Bar */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 mt-12 relative z-[60] cursor-auto">
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-black/5 pt-8">
                    <span className="text-xs uppercase tracking-widest text-brand-black/40 font-medium mb-4 md:mb-0">
                        {t('stories.navigate')}
                    </span>

                    <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-8">
                        {stories.map((story, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={story.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleNavClick(index);
                                    }}
                                    className={cn(
                                        "group relative px-2 py-1 transition-all duration-300 focus:outline-none",
                                        isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                                    )}
                                >
                                    <span className="text-sm font-medium text-brand-black flex items-center gap-2">
                                        <span className={cn(
                                            "font-mono text-xs transition-colors",
                                            isActive ? "text-brand-green" : "text-brand-black"
                                        )}>
                                            0{index + 1}
                                        </span>
                                        <span className="hidden md:inline-block">{story.client}</span>
                                    </span>

                                    {/* Active Indicator Line */}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 h-[2px] bg-brand-green transition-all duration-500 ease-out",
                                        isActive ? "w-full" : "w-0 group-hover:w-1/2"
                                    )} />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            <style>{`
        /* Equalizer Keyframes for Status Icon */
        @keyframes equalizer-1 {
            0%, 100% { height: 6px; }
            50% { height: 16px; }
        }
        @keyframes equalizer-2 {
            0%, 100% { height: 16px; }
            50% { height: 8px; }
        }
        @keyframes equalizer-3 {
            0%, 100% { height: 8px; }
            50% { height: 12px; }
        }
        
        .animate-equalizer-1 { animation: equalizer-1 0.8s ease-in-out infinite; }
        .animate-equalizer-2 { animation: equalizer-2 0.6s ease-in-out infinite 0.1s; }
        .animate-equalizer-3 { animation: equalizer-3 0.7s ease-in-out infinite 0.2s; }
      `}</style>
        </section>
    );
};

export default BrandStories;