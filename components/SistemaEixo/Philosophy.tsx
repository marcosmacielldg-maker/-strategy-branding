import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Spin animation for the badge
            gsap.to(badgeRef.current, {
                rotate: 360,
                repeat: -1,
                duration: 20,
                ease: 'linear'
            });

            // Fade in for the badge
            gsap.from(badgeRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                scale: 0.5,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.5)'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // SVG Circular Text Path
    const circularText = "Identidade Visual • Estratégia • Posicionamento • ";

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden border-t border-black/5">
            <div className="absolute inset-0 tech-grid-light opacity-50 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[40vh]">

                {/* Left Text */}
                <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-sans text-[#111] max-w-2xl leading-[1.1] tracking-tight">
                    Faz sentido para <span className="font-serif italic font-bold">sua empresa?</span>
                </h2>

                {/* Right Spinning Badge */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                    <div ref={badgeRef} className="w-full h-full relative">
                        <svg viewBox="0 0 200 200" className="w-full h-full text-[#111]">
                            <path id="textPath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
                            <text fontSize="12" fill="currentColor" letterSpacing="2" className="font-sans font-medium uppercase">
                                <textPath href="#textPath" startOffset="0%">
                                    {circularText}
                                </textPath>
                            </text>
                        </svg>

                        {/* Center Star / Compass Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 text-[#45f2a1]">
                                <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="50" cy="50" r="4" fill="currentColor" />
                                {/* Crosshairs */}
                                <path d="M50 20 L50 35 M50 65 L50 80 M20 50 L35 50 M65 50 L80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            {/* Decorative Huge Text at the bottom (overflows into next section) */}
            <div className="w-full overflow-hidden mt-12 opacity-80 pointer-events-none translate-y-12">
                <h3 className="text-[15vw] leading-none font-serif text-[#111] font-bold text-center whitespace-nowrap tracking-tighter">
                    marcos maciell
                </h3>
            </div>
        </section>
    );
};

export default Philosophy;
