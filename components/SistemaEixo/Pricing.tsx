import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Pricing: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".bento-pricing", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const features = [
        'Identidade Visual',
        '3x Imersões de marca',
        'Diagnóstico da Marca',
        'Página de Vendas',
        'Manual de Diretrizes (BrandBook)',
        'Atributos funcionais & emocionais',
        'Pitch/Apresentação Comercial',
        'Aplicações & Materiais',
        '3 Consultorias PÓS - PROJETO'
    ];

    return (
        <section id="pricing" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white relative z-10 w-full overflow-hidden">
            {/* Light Grid Background */}
            <div className="absolute inset-0 tech-grid-light opacity-50 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-4">

                {/* Top Row: Mountain | Resumo | Photo & Price */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">

                    {/* Column 1: Mountain */}
                    <div className="bento-pricing col-span-1 rounded-xl overflow-hidden relative shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
                            alt="Brand landscape"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                        <div className="absolute inset-0 flex items-end p-6">
                            <h3 className="font-serif text-white text-4xl leading-none">
                                marcos<span className="text-xl align-top">®</span><br />maciell
                            </h3>
                        </div>
                    </div>

                    {/* Column 2: Resumo da Proposta */}
                    <div className="bento-pricing md:col-span-2 bg-[#234d3a] rounded-xl p-8 md:p-12 shadow-lg flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#45f2a1] mb-6 tracking-tight">
                            Resumo<br />da Proposta
                        </h2>

                        <div className="flex items-center gap-2 mb-6 text-white text-xl">
                            <span className="font-sans font-medium">Sistema</span>
                            <span className="font-serif italic font-bold">EIXO™</span>
                        </div>

                        <ul className="space-y-3 font-sans">
                            {features.map((feature, i) => (
                                <li key={i} className={`flex items-center gap-3 ${feature === 'Página de Vendas' ? 'text-[#45f2a1] font-semibold' : 'text-white/90'}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#45f2a1] opacity-80" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Photo & Price Stack */}
                    <div className="bento-pricing col-span-1 flex flex-col gap-4 h-full">
                        <div className="flex-1 rounded-xl overflow-hidden shadow-lg relative min-h-[200px]">
                            <img src="/assets/marcos.webp" alt="Marcos Maciel" className="w-full h-full object-cover" loading="lazy" width="400" height="500" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1620608553531-df243eec3854?q=80&w=800&auto=format&fit=crop" }} />
                        </div>
                        <div className="flex-[1.2] bg-[#2a2a2a] text-white rounded-xl p-6 shadow-lg flex flex-col justify-center">
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-1 line-through decoration-white/30 decoration-[2px]">
                                R$10.000,00
                            </h3>
                            <p className="text-[#45f2a1] text-xs uppercase tracking-wide font-sans mb-1 font-bold">Valor à vista</p>
                            <p className="text-white/50 text-[10px] uppercase font-sans mb-4">Valor total das entregas</p>
                            <p className="font-sans text-xs text-white/70 leading-relaxed">
                                Você está a um passo de adquirir inteligência para seu negócio, se posicionar no mercado, sair na frente dos concorrentes, atrair clientes qualificados, aumentar a percepção de valor dos seus produtos e vender mais.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: RITMO | CTA */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-32">

                    {/* RITMO Block */}
                    <div className="bento-pricing md:col-span-3 bg-[#2a2a2a] rounded-xl px-8 py-6 md:py-0 shadow-lg flex flex-col md:flex-row items-center gap-8 overflow-hidden h-full">
                        <div className="relative">
                            <h2 className="font-serif italic text-white text-6xl md:text-8xl tracking-widest leading-none" style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}>
                                RITMO
                            </h2>
                            <span className="absolute top-1/2 -translate-y-1/2 left-0 w-full text-center text-[#45f2a1] font-sans font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-80 z-10">
                                METODOLOGIA
                            </span>
                        </div>

                        <div className="flex-1 flex flex-col md:flex-row gap-6 items-center">
                            <p className="text-white/60 font-sans text-xs flex-1 max-w-[150px]">
                                Construindo um universo visual e verbal que transmita sua essência com palavras e formas.
                            </p>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#234d3a] to-[#45f2a1]/50 hidden md:block"></div>
                            <p className="text-white/60 font-sans text-xs flex-1 max-w-[150px]">
                                Aplicando tudo o que foi definido como o caminho certo para a valorização do seu negócio.
                            </p>
                        </div>
                    </div>

                    {/* CTA Block */}
                    <div className="bento-pricing col-span-1 bg-[#234d3a] rounded-xl p-4 shadow-lg flex flex-col justify-center items-center h-full gap-3 group cursor-pointer hover:bg-[#1f4332] transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#45f2a1]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <button className="w-full bg-[#3ae993] text-[#11261c] px-4 py-3 rounded text-sm font-sans font-bold shadow-[0_0_15px_rgba(69,242,161,0.3)] transition-transform group-hover:scale-[1.02]">
                            Comece sua jornada!
                        </button>
                        <div className="flex items-center gap-1.5 text-[#45f2a1] text-xs font-sans">
                            <Lock className="w-3 h-3" />
                            <span>Seu pagamento é 100% Seguro</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Pricing;
