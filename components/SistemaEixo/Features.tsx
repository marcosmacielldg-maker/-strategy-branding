import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Interactive State for Card 1
    const [diagnostics, setDiagnostics] = useState([
        "Diagnóstico da Marca",
        "Imersões Estratégicas",
        "Posicionamento Global"
    ]);

    useEffect(() => {
        // Card 1 Shuffler Logic
        const interval = setInterval(() => {
            setDiagnostics(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                if (last) newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Card 2 Typewriter Logic
    const [typedText, setTypedText] = useState("");
    const fullText = "> Build complete. Visual Architecture deployed.\\n> Brand guidelines locked.\\n> Awaiting market impact.";

    useEffect(() => {
        let i = 0;
        const typingMsg = () => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; setTypedText(""); }, 4000);
            }
        };
        const timer = setInterval(typingMsg, 50);
        return () => clearInterval(timer);
    }, []);

    // Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#fafafa] relative overflow-hidden">
            <div className="absolute inset-0 tech-grid-light z-0 opacity-50 pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans text-[#111] mb-4">
                        Três Frentes de <span className="font-serif italic text-[#45f2a1] relative inline-block z-10 pr-1">Ataque<span className="absolute bottom-[2px] left-0 w-full h-[8px] bg-[#234d3a] z-[-1]" /></span>
                    </h2>
                    <p className="text-[#234d3a] font-sans max-w-xl text-lg opacity-80">
                        O Sistema Eixo não é um pacote de design. É a espinha dorsal comercial da sua empresa, dividida em três pilares interligados na estética de Bento Grid.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Diagnostic Shuffler */}
                    <div className="feature-card bg-[#234d3a] border border-[#45f2a1]/20 rounded-[2rem] p-8 md:col-span-2 lg:col-span-1 shadow-2xl relative overflow-hidden group">
                        <h3 className="text-xl font-bold font-sans text-white mb-2">Inteligência de Posicionamento</h3>
                        <p className="text-white/60 text-sm mb-8">Definindo o DNA, território e orquestração antes de criar a sua imagem.</p>

                        <div className="relative h-48 w-full perspective flex flex-col items-center justify-center">
                            {diagnostics.map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute w-full p-4 bg-[#1a3a2b] border border-[#45f2a1]/30 rounded-xl text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                    style={{
                                        transform: `translateY(${index * 15 - 15}px) scale(${1 - index * 0.05})`,
                                        zIndex: 10 - index,
                                        opacity: 1 - index * 0.3
                                    }}
                                >
                                    <span className="font-sans font-medium text-[#45f2a1]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Telemetry Typewriter */}
                    <div className="feature-card bg-[#234d3a] border border-[#45f2a1]/20 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold font-sans text-white">Arquitetura Visual</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#45f2a1] animate-pulse" />
                                    <span className="text-[10px] font-mono text-[#45f2a1] uppercase">Live Feed</span>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm mb-6">Tradução da essência para cores, formas e tipografias de alto valor.</p>
                        </div>

                        <div className="bg-[#10241b] rounded-xl p-4 font-mono text-xs text-[#45f2a1] h-32 overflow-hidden whitespace-pre-line leading-relaxed border border-[#45f2a1]/10 shadow-inner">
                            {typedText}<span className="animate-ping">|</span>
                        </div>
                    </div>

                    {/* Card 3: Cursor Protocol Scheduler */}
                    <div className="feature-card bg-[#234d3a] border border-[#45f2a1]/20 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden lg:col-span-1 md:col-span-2 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold font-sans text-white mb-2">Arsenal de Conversão</h3>
                            <p className="text-white/60 text-sm mb-6">Playbook visual, pitch deck e página de vendas prontas para escalar.</p>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mt-auto">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, dIdx) => (
                                <div key={dIdx} className="text-center font-mono text-[10px] text-white/40 mb-1">{day}</div>
                            ))}
                            {Array.from({ length: 21 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`aspect-square rounded-md transition-colors duration-500 ease-in-out ${[12, 13, 14].includes(i) ? 'bg-[#45f2a1] shadow-[0_0_10px_rgba(69,242,161,0.5)]' : 'bg-[#1a3a2b] border border-white/5'}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
