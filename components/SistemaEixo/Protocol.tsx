import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
    {
        num: "01",
        title: "Reconhecimento & Imersão",
        desc: "Antes de criar, investigamos a fundo a essência da marca, seu mercado e concorrência.",
    },
    {
        num: "02",
        title: "Identidade & Estratégia",
        desc: "A partir dos dados, extraímos insights estratégicos para posicionamento e tom de voz.",
    },
    {
        num: "03",
        title: "Território & Criação IDV",
        desc: "Desenvolvimento da linguagem visual. Refinamento de cores, tipografia e aplicações.",
    },
    {
        num: "04",
        title: "Orquestração Final",
        desc: "Organização de guias visuais e diretrizes para garantir que a identidade funcione para vendas.",
    }
];

const Protocol: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                // Sticky stacking effect
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 120px", // Pin below navbar
                    end: `+=${window.innerHeight * 1.5}px`,
                    pin: true,
                    pinSpacing: false,
                    id: `card-${i}`,
                });

                // Scale down effect for cards behind
                if (i > 0) {
                    gsap.to(cardsRef.current[i - 1], {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: true,
                        },
                        scale: 0.9,
                        opacity: 0.3,
                        filter: 'blur(10px)'
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="py-24 bg-[#1a3a2b] relative">
            <div className="max-w-4xl mx-auto px-6 pb-[50vh]">
                <h2 className="text-4xl md:text-6xl font-sans text-white mb-24 text-center">
                    O <span className="font-serif italic text-[#45f2a1]">Método</span> Eixo
                </h2>

                <div className="relative">
                    {phases.map((phase, i) => (
                        <div
                            key={i}
                            ref={el => cardsRef.current[i] = el}
                            className="w-full bg-[#234d3a] rounded-[2rem] border border-[#45f2a1]/20 p-8 md:p-12 shadow-2xl flex flex-col justify-between"
                            style={{
                                minHeight: '60vh',
                                marginBottom: '5vh',
                                zIndex: i,
                            }}
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-[#45f2a1] text-2xl tracking-widest">{phase.num}</span>
                                {/* Decorative Canvas/SVG Area for Card */}
                                <div className="w-16 h-16 md:w-24 md:h-24 opacity-30">
                                    {i === 0 && (
                                        <svg viewBox="0 0 100 100" className="animate-spin-slow w-full h-full">
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="#45f2a1" strokeWidth="2" strokeDasharray="10 10" />
                                        </svg>
                                    )}
                                    {i === 1 && (
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <path d="M10,50 L90,50" stroke="#45f2a1" strokeWidth="2" strokeDasharray="100" className="animate-pulse" />
                                            <circle cx="50" cy="50" r="5" fill="#45f2a1" className="animate-ping" />
                                        </svg>
                                    )}
                                    {i === 2 && (
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#45f2a1" strokeWidth="2" />
                                            <rect x="30" y="30" width="40" height="40" fill="none" stroke="#45f2a1" strokeWidth="2" className="animate-pulse" />
                                        </svg>
                                    )}
                                    {i === 3 && (
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <polygon points="50,10 90,90 10,90" fill="none" stroke="#45f2a1" strokeWidth="2" className="animate-pulse" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
                                    {phase.title}
                                </h3>
                                <p className="text-white/70 font-sans text-lg md:text-xl max-w-xl">
                                    {phase.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Protocol;
