import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════
   NAVBAR — IL Flutuante / Pill-shaped
   Transparente no topo → vidro branco ao rolar
═══════════════════════════════════════════════ */

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-5 py-4 flex items-center justify-between"
        >
            {/* Pill Nav Container */}
            <div className={`
                w-full max-w-5xl mx-auto flex items-center justify-between
                px-5 py-3 rounded-full transition-all duration-500
                ${scrolled
                    ? 'bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
                    : 'bg-transparent border border-transparent'
                }
            `}>
                {/* Logo */}
                <img
                    src={scrolled ? '/logo-oficial-preto.svg' : '/logo-oficial-preto.svg'}
                    alt="Sistema EIXO™"
                    className="h-6 md:h-7 w-auto transition-opacity duration-300"
                />

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium">
                    {[
                        { href: '#features', label: 'A Solução' },
                        { href: '#protocol', label: 'O Método' },
                        { href: '#pricing', label: 'Investimento' },
                    ].map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`transition-colors duration-300 hover:text-brand-green ${scrolled ? 'text-[#333]' : 'text-[#444]'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="https://wa.me/5511999999999?text=Olá%20Marcos%2C%20quero%20solicitar%20uma%20proposta%20para%20o%20Sistema%20EIXO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-green text-white text-xs font-semibold rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(12,119,78,0.2)]"
                >
                    <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10">Solicitar Proposta</span>
                </a>
            </div>
        </motion.header>
    );
};

export default Navbar;
