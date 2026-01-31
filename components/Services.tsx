import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowDown, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { services } from '../lib/data'; // Import data source

const Services: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const { language, t } = useLanguage();

    return (
        <section id="solucoes" className="py-24 md:py-32 px-4 md:px-12 bg-white relative z-20 dot-pattern">
            <div className="max-w-screen-xl mx-auto">

                <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
                    {/* Lado Esquerdo: Texto (Sticky no Desktop para acompanhar o scroll da lista) */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-sans text-5xl md:text-7xl font-medium tracking-tight text-brand-black leading-[1.1]">
                                {t('services.title')}<br />
                                <span className="font-serif italic text-brand-green">{t('services.subtitle')}</span>
                            </h2>
                            <p className="mt-8 text-brand-black/60 text-lg font-light leading-relaxed mb-12">
                                {t('services.description')}
                            </p>

                            <div className="hidden lg:block">
                                <div className="h-px w-24 bg-brand-green/30 mb-4"></div>
                                <p className="text-sm font-mono text-brand-black/40 uppercase tracking-widest">
                                    Expertise
                                </p>
                            </div>

                            <div className="mt-12 w-full hidden lg:flex justify-start">
                                <a href="#contato" className="relative group inline-flex items-center justify-center gap-4 px-10 py-5 overflow-hidden rounded-full border border-brand-green bg-brand-green transition-all duration-300 hover:border-brand-light shadow-sm hover:shadow-xl hover:shadow-brand-light/20">
                                    <span className="absolute w-0 h-0 transition-all duration-[1500ms] ease-in-out bg-brand-light rounded-full group-hover:w-[45rem] group-hover:h-[45rem]"></span>
                                    <span className="relative flex items-center gap-3 text-lg font-medium text-white group-hover:text-brand-black transition-colors duration-700 z-10">
                                        {t('services.cta')}
                                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Lado Direito: Lista Vertical de Cards Expansivos */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                        {services.map((item) => {
                            const isHovered = hoveredId === item.id;

                            // Determine content based on language
                            const title = language === 'pt' ? item.title : item.titleEn;
                            const subtitle = language === 'pt' ? item.subtitle : item.subtitleEn;
                            const description = language === 'pt' ? item.description : item.descriptionEn;
                            const tags = language === 'pt' ? item.tags : item.tagsEn;

                            return (
                                <motion.div
                                    key={item.id}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    layout
                                    className={`
                        relative overflow-hidden rounded-xl cursor-pointer w-full
                        bg-white border transition-all duration-300 ease-out group
                        `}
                                    style={{
                                        borderColor: isHovered ? '#45f2a1' : '#f0f0f0',
                                        borderWidth: isHovered ? '2px' : '1px',
                                        boxShadow: isHovered ? '0 4px 20px -2px rgba(69, 242, 161, 0.15)' : '0 2px 10px rgba(0,0,0,0.02)',
                                    }}
                                >
                                    {/* Cabeçalho do Card (Sempre visível) */}
                                    <div className="p-8 md:p-10 flex items-center justify-between relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                                            <h3 className={`font-sans font-semibold text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${isHovered ? 'text-brand-black' : 'text-brand-black/80'}`}>
                                                {title}
                                            </h3>
                                            <span className={`font-serif italic text-lg transition-colors duration-300 ${isHovered ? 'text-brand-green' : 'text-brand-black/40'}`}>
                                                {subtitle}
                                            </span>
                                        </div>

                                        <div className={`
                                w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                                ${isHovered ? 'bg-brand-green border-brand-green lg:rotate-0' : 'bg-transparent border-brand-black/5'}
                            `}>
                                            {/* Consistent Icon for Link */}
                                            {/* Changed to Plus/Minus or just Chevron, keeping Chevron for now as it indicates expansion */}
                                            <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-brand-black/30'}`} />
                                        </div>
                                    </div>

                                    {/* Conteúdo Expansivo (Descrição e Tags) */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-8 md:px-10 pb-10 relative z-10">
                                                    <p className="text-brand-black/70 font-light leading-relaxed max-w-2xl mb-6 border-t border-brand-black/5 pt-4">
                                                        {description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {tags.map((tag, idx) => (
                                                            <span key={idx} className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-black/10 text-brand-black/60 bg-[#F8F8F8]">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Efeito de Gradiente de Fundo no Hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-[#F8F8F8] to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>


                {/* CTA Button Positioned Below All Solutions (Mobile Only) */}
                <div className="mt-12 w-full flex lg:hidden justify-center">
                    <a href="#contato" className="relative group inline-flex items-center justify-center gap-4 px-10 py-5 overflow-hidden rounded-full border border-brand-green bg-brand-green transition-all duration-300 hover:border-brand-light shadow-sm hover:shadow-xl hover:shadow-brand-light/20 w-full">
                        <span className="absolute w-0 h-0 transition-all duration-[1500ms] ease-in-out bg-brand-light rounded-full group-hover:w-[45rem] group-hover:h-[45rem]"></span>
                        <span className="relative flex items-center gap-3 text-lg font-medium text-white group-hover:text-brand-black transition-colors duration-700 z-10">
                            {t('services.cta')}
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;