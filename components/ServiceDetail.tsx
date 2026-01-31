import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ArrowDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { services } from '../lib/data';
import Navbar from './Navbar';
import Footer from './Footer';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { language, t } = useLanguage();

    const service = services.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen bg-brand-light flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-sans mb-4">404</h1>
                    <Link to="/" className="text-brand-green underline">
                        {t('service.back')}
                    </Link>
                </div>
            </div>
        );
    }

    const content = {
        title: language === 'pt' ? service.title : service.titleEn,
        subtitle: language === 'pt' ? service.subtitle : service.subtitleEn,
        description: language === 'pt' ? service.description : service.descriptionEn,
        tags: language === 'pt' ? service.tags : service.tagsEn,
        narrative: language === 'pt' ? service.narrative : service.narrativeEn,
        process: language === 'pt' ? service.process : service.processEn,
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-brand-light text-brand-black font-sans selection:bg-brand-green selection:text-white pt-20">

                {/* Header / Back Button */}
                <div className="fixed top-24 left-4 z-40 lg:top-32 lg:left-12 mix-blend-difference text-white">
                    <Link to="/" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">{t('service.back')}</span>
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 md:px-12 bg-white rounded-b-[3rem] shadow-sm z-10">
                    <div className="max-w-screen-xl mx-auto pt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col gap-4 mb-8">
                                <span className="font-serif italic text-2xl md:text-3xl text-brand-green">{content.subtitle}</span>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] max-w-4xl">
                                    {content.title}
                                </h1>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {content.tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-brand-black/10 text-sm font-medium uppercase tracking-wide bg-gray-50 text-brand-black/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl font-light leading-relaxed text-brand-black/70 max-w-3xl">
                                {content.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 md:px-12 bg-[#F8F8F8]">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
                                    {content.narrative.title}
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-lg md:text-xl font-light leading-relaxed text-brand-black/80">
                                    {content.narrative.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 px-4 md:px-12 bg-brand-black text-white relative overflow-hidden">
                    {/* Gradient Orb */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-screen-xl mx-auto relative z-10">
                        <div className="mb-16">
                            <h3 className="font-serif italic text-3xl text-brand-green mb-2">{t('service.methodology')}</h3>
                            <h2 className="text-4xl md:text-6xl font-medium">{content.process.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {content.process.steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                                >
                                    <span className="text-4xl font-serif text-brand-green/40 mb-4 block group-hover:text-brand-green transition-colors">0{idx + 1}</span>
                                    <h4 className="text-xl font-medium">{step}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-4 md:px-12 bg-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-medium mb-8 tracking-tight">{t('service.cta_title')}</h2>
                        <a href="#contato" className="relative group inline-flex items-center justify-center gap-4 px-12 py-6 overflow-hidden rounded-full bg-brand-green text-white transition-all hover:scale-105 shadow-xl hover:shadow-brand-green/30">
                            <span className="relative z-10 text-xl font-medium">{t('service.cta_button')}</span>
                            <ArrowDown className="w-6 h-6 relative z-10 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
};

export default ServiceDetail;
