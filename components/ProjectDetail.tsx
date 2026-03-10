import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../lib/data';
import { useLanguage } from '../lib/i18n';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Calculate Next Project
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen min-h-[100dvh] bg-brand-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">{t('project.not_found')}</h1>
          <button onClick={() => navigate('/')} className="text-brand-green hover:underline">
            {t('project.back_home')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-black text-white min-h-screen min-h-[100dvh] relative">
      {/* Navigation / Back Button */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-gradient-to-b from-brand-black/80 to-transparent backdrop-blur-[2px]">
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white/70 hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          {t('project.back')}
        </button>

        <span className="font-serif text-xl md:text-2xl text-white opacity-80">
          marcosmaciell
        </span>
      </nav>

      <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 max-w-screen-xl mx-auto">
        {/* Header: Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 text-center md:text-left"
        >
          <div className="inline-block mb-6 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-light">
              {project.client} • {project.year}
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-6 text-white/90">
            {language === 'en' && project.titleEn ? project.titleEn : project.title}
          </h1>

          {project.subtitle && (
            <h2 className="font-light text-2xl md:text-3xl text-white/60 italic font-serif mb-8">
              {language === 'en' && project.subtitleEn ? project.subtitleEn : project.subtitle}
            </h2>
          )}
        </motion.div>

        {/* Content Grid: Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24 md:mb-32">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="w-12 h-px bg-brand-green mb-6"></div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">{t('project.challenge')}</h3>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              {language === 'en' && project.descriptionEn ? project.descriptionEn : project.description}
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-12">

            {/* Legacy Detail Description */}
            {project.detailDescription && (
              <div className="md:columns-2 gap-12 text-lg md:text-xl text-white/70 font-light leading-relaxed space-y-6">
                {project.detailDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{language === 'en' && project.detailDescriptionEn ? project.detailDescriptionEn.split('\n\n')[idx] : paragraph}</p>
                ))}
              </div>
            )}

            {/* Structured Content: Construção */}
            {project.construction && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-green mb-2">{t('project.construction')}</h3>
                <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                  {language === 'en' && project.constructionEn ? project.constructionEn : project.construction}
                </p>
              </div>
            )}

            {/* Structured Content: Resultado */}
            {project.result && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-green mb-2">{t('project.result')}</h3>
                <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                  {language === 'en' && project.resultEn ? project.resultEn : project.result}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Extra Section (e.g. Impressos) */}
        {project.extraSection && (
          <div className="mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-12">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="w-12 h-px bg-brand-green mb-6"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">
                  {language === 'en' && project.extraSection.titleEn ? project.extraSection.titleEn : project.extraSection.title}
                </h3>
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                  {language === 'en' && project.extraSection.descriptionEn ? project.extraSection.descriptionEn : project.extraSection.description}
                </p>
              </div>
            </div>

            {/* Horizontal Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {project.extraSection.images.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative aspect-[4/3] overflow-hidden bg-brand-black/50"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.extraSection?.title} ${idx + 1}`}
                    className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Image Sequence / Gallery - Vertical Stack based on Reference */}
        <div className="flex flex-col gap-4 md:gap-8">
          {project.detailImages?.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-video overflow-hidden bg-brand-black/50"
            >
              <img
                src={imgSrc}
                alt={`${project.client} detail ${idx + 1}`}
                className="w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}

          {/* Fallback Image if no gallery (using main thumb) */}
          {(!project.detailImages || project.detailImages.length === 0) && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full"
            >
              <img src={project.image} alt={project.client} className="w-full h-auto rounded-sm" />
            </motion.div>
          )}
        </div>

        {/* Footer Navigation (Next Project) */}
        {/* Footer Navigation */}
        <div className="mt-32 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* View All */}
          <a href="/#brand-stories" className="group flex flex-col items-start gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green/80">{t('project.menu')}</span>
            <span className="font-serif text-4xl md:text-5xl text-white group-hover:text-brand-green transition-colors">
              {t('project.view_all')}
            </span>
          </a>

          {/* Next Project */}
          <div
            onClick={() => navigate(`/project/${nextProject.id}`)}
            className="group flex flex-col items-start md:items-end gap-4 cursor-pointer text-left md:text-right"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">{t('project.next')}</span>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-serif text-4xl md:text-5xl text-white group-hover:text-brand-green transition-colors">
                {nextProject.client}
              </span>
              <span className="text-sm text-white/60 mt-2 group-hover:text-white transition-colors">{nextProject.title}</span>
            </div>
          </div>

        </div>

      </main>

      {/* Floating CTA Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="fixed bottom-24 lg:bottom-10 left-0 right-0 flex justify-center z-[60] pointer-events-none mix-blend-normal"
      >
        <a
          href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20vim%20pelo%20site%21"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (window.dataLayer) {
              window.dataLayer.push({ event: 'gerou_lead', origin: 'project_detail_whatsapp' });
            }
            if (window.fbq) {
              window.fbq('track', 'Lead', { content_name: 'project_detail_whatsapp' });
            }
          }}
          className="pointer-events-auto flex items-center justify-center gap-4 px-12 py-4 bg-brand-green text-white rounded-full font-medium shadow-[0_10px_40px_rgba(12,119,78,0.6)] border border-white/10 backdrop-blur-md hover:bg-brand-light hover:text-brand-green hover:scale-105 transition-all duration-300 group min-w-[260px] max-w-[90vw]"
        >
          <span className="text-sm tracking-[0.15em] uppercase font-bold text-center">{t('project.start')}</span>

          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>

    </div>
  );
};

export default ProjectDetail;