import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -20,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] px-6 md:px-12 py-5 flex items-center justify-between
      ${isScrolled ? 'bg-[#111]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-white/5'}`}
        >
            <div className="flex items-center">
                <img
                    src="/logo-eixo-claro.svg"
                    alt="Sistema Eixo"
                    className="h-6 md:h-8 w-auto"
                />
            </div>

            <nav className="hidden md:flex items-center gap-10 text-white/70 font-sans text-xs uppercase tracking-widest font-medium">
                <a href="#features" className="transition-colors duration-300 hover:text-[#45f2a1]">A Solução</a>
                <a href="#protocol" className="transition-colors duration-300 hover:text-[#45f2a1]">O Método</a>
                <a href="#pricing" className="transition-colors duration-300 hover:text-[#45f2a1]">O Investimento</a>
            </nav>

            <div className="flex items-center">
                <a href="https://wa.me/5511999999999?text=Olá%20Marcos%2C%20quero%20solicitar%20uma%20proposta%20para%20o%20Sistema%20EIXO"
                    target="_blank" rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-white/5 border border-white/10 text-white px-6 py-2.5 font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:border-[#45f2a1]/50">
                    <span className="absolute inset-0 w-full h-full bg-[#45f2a1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    <span className="relative z-10 group-hover:text-[#111] transition-colors duration-300">Solicitar Proposta</span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;
