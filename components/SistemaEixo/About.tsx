import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleGroupRef = useRef<HTMLDivElement>(null);
    const gridGroupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleGroupRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%'
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.bento-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
            <div className="absolute inset-0 tech-grid-light z-0 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: About Text */}
                <div ref={titleGroupRef} className="max-w-xl">
                    <p className="font-sans font-bold text-[#234d3a]/50 mb-2 tracking-wide uppercase text-sm">Estrategista & Diretor Criativo</p>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#111] mb-8 leading-none tracking-tight">
                        Prazer, Marcos Maciel!
                    </h2>
                    <p className="font-sans text-[#234d3a] text-lg md:text-xl leading-relaxed mb-12">
                        Sou empresário e diretor criativo. Atuo ajudando negócios a alinharem a excelência de suas entregas à percepção de seus clientes. Meu objetivo é eliminar o amadorismo visual e construir marcas de alto valor através do Sistema EIXO™.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-[#f0f0f0] rounded-xl p-6 border border-[#e0e0e0]">
                            <div className="text-2xl mb-3">⚙</div>
                            <h3 className="font-sans font-bold text-[#234d3a] mb-2">Visão Comercial</h3>
                            <p className="font-sans text-sm text-[#234d3a]/70">Projetos estruturados para facilitar suas vendas, gerar confiança imediata no cliente e justificar a cobrança de um ticket premium.</p>
                        </div>
                        <div className="bg-[#f0f0f0] rounded-xl p-6 border border-[#e0e0e0]">
                            <div className="text-2xl mb-3">♟</div>
                            <h3 className="font-sans font-bold text-[#234d3a] mb-2">Processos e Escala</h3>
                            <p className="font-sans text-sm text-[#234d3a]/70">Mais de 15 projetos estruturados no Brasil e exterior, organizando a comunicação de negócios B2B que estão em forte expansão.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Bento Grid Projects */}
                <div ref={gridGroupRef} className="grid grid-cols-2 grid-rows-3 gap-1 md:gap-2 aspect-[4/5] md:aspect-square w-full">
                    {/* Solique / Solvia Tech Top */}
                    <div className="bento-item col-span-2 row-span-1 grid grid-cols-2 gap-1 md:gap-2">
                        <div className="bg-blue-600 rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-blue-700/80 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Brand b" />
                        </div>
                        <div className="bg-[#111] rounded-lg overflow-hidden relative">
                            <img src="/assets/solvia-eng.webp" className="w-full h-full object-cover" loading="lazy" width="400" height="300" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1541888081604-006ee788debf?q=80&w=800&auto=format&fit=crop" }} alt="Solvia" />
                        </div>
                    </div>

                    {/* Persist Center */}
                    <div className="bento-item col-span-2 row-span-1 grid grid-cols-3 gap-1 md:gap-2">
                        <div className="bg-orange-600 rounded-lg overflow-hidden">
                            <img src="/assets/persist.webp" className="w-full h-full object-cover" loading="lazy" width="400" height="300" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop" }} alt="Persist" />
                        </div>
                        <div className="bg-zinc-800 rounded-lg overflow-hidden">
                            <img src="/assets/marcos.webp" className="w-full h-full object-cover grayscale opacity-80" loading="lazy" width="400" height="300" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1620608553531-df243eec3854?q=80&w=800&auto=format&fit=crop" }} alt="Marcos" />
                        </div>
                        <div className="bg-[#051124] rounded-lg overflow-hidden flex items-center justify-center p-4">
                            {/* Abstract tech logo */}
                            <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-400">
                                <path d="M20,80 L80,20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                <path d="M40,90 L90,40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                <path d="M10,60 L60,10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Dark Bottom Row */}
                    <div className="bento-item col-span-2 row-span-1 grid grid-cols-3 gap-1 md:gap-2">
                        <div className="bg-zinc-900 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                            <h4 className="text-white/80 font-sans tracking-widest uppercase font-bold text-xl">SOLVIA</h4>
                        </div>
                        <div className="bg-[#0a0a0a] rounded-lg overflow-hidden flex items-center justify-center p-4">
                            <svg viewBox="0 0 100 100" className="w-16 h-16 text-red-600 fill-current">
                                <polygon points="10,50 90,20 60,90" />
                            </svg>
                        </div>
                        <div className="bg-blue-600 rounded-lg overflow-hidden">
                            <img src="/assets/braem.webp" className="w-full h-full object-cover" loading="lazy" width="400" height="300" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" }} alt="Braem" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
