import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/' && href.startsWith('#')) {
            window.location.href = '/' + href;
            return;
        }

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <>
            {/* Floating Desktop Navigation */}
            <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center">
                <div
                    className={`
                backdrop-blur-xl border rounded-full px-4 py-3 flex items-center gap-10 transition-all duration-500 whitespace-nowrap
                ${isScrolled
                            ? 'bg-white/70 border-brand-black/10 shadow-xl shadow-black/5 text-brand-black'
                            : 'bg-white/5 border-white/20 shadow-lg shadow-black/5 text-white hover:bg-white/10'
                        }
            `}
                >

                    {/* Left Links */}
                    <div className="flex items-center gap-8 pl-2">
                        <a
                            href="#solucoes"
                            onClick={(e) => scrollToSection(e, '#solucoes')}
                            className={`text-sm font-medium transition-colors ${isScrolled ? 'text-brand-black/80 hover:text-brand-green' : 'text-white/90 hover:text-brand-light'}`}
                        >
                            {t('nav.solutions')}
                        </a>
                        <a
                            href="#metodologia"
                            onClick={(e) => scrollToSection(e, '#metodologia')}
                            className={`text-sm font-medium transition-colors ${isScrolled ? 'text-brand-black/80 hover:text-brand-green' : 'text-white/90 hover:text-brand-light'}`}
                        >
                            {t('nav.method')}
                        </a>
                    </div>

                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => scrollToSection(e, '#')}
                        className={`font-serif text-2xl tracking-tight px-6 hover:opacity-70 transition-opacity ${isScrolled ? 'text-brand-black' : 'text-white'}`}
                    >
                        marcosmaciell
                    </a>

                    {/* Right Links & Button */}
                    <div className="flex items-center gap-8 pr-1">
                        <a
                            href="#contato"
                            onClick={(e) => scrollToSection(e, '#contato')}
                            className={`text-sm font-medium transition-colors ${isScrolled ? 'text-brand-black/80 hover:text-brand-green' : 'text-white/90 hover:text-brand-light'}`}
                        >
                            {t('nav.contact')}
                        </a>



                        {/* Realistic Language Switch - Text Based */}
                        <div
                            onClick={toggleLanguage}
                            className={`
                                relative flex items-center cursor-pointer rounded-full px-1 py-1 transition-colors duration-300 ease-in-out border
                                ${isScrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/10'}
                            `}
                        >
                            {/* Sliding Background */}
                            <motion.div
                                className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm z-0"
                                initial={false}
                                animate={{
                                    left: language === 'pt' ? '4px' : '50%',
                                    width: 'calc(50% - 4px)'
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />

                            {/* PT-BR Option */}
                            <div className={`relative z-10 w-12 text-center py-1 text-[10px] font-bold transition-colors duration-300 ${language === 'pt' ? 'text-brand-green' : (isScrolled ? 'text-brand-black/40' : 'text-white/60')}`}>
                                PT-BR
                            </div>

                            {/* EN Option */}
                            <div className={`relative z-10 w-12 text-center py-1 text-[10px] font-bold transition-colors duration-300 ${language === 'en' ? 'text-brand-green' : (isScrolled ? 'text-brand-black/40' : 'text-white/60')}`}>
                                EN
                            </div>
                        </div>

                        <a
                            href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20Instagram!%20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                    w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer
                    ${isScrolled
                                    ? 'border-brand-black/10 text-brand-black bg-white/50 hover:bg-white'
                                    : 'border-white/20 text-white bg-white/10 hover:bg-white/20'
                                }
                `}
                            title="WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;