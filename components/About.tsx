import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/i18n';

interface AboutStepImage {
  src: string;
  alt: string;
  className: string;
}

interface AboutStep {
  id: number;
  content: React.ReactNode;
  images: AboutStepImage[];
}

const About: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutSteps: AboutStep[] = [
    {
      id: 0,
      content: (
        <>
          {t('about.step0.1')}<br />
          <span className="text-brand-green font-serif italic">{t('about.step0.2')}</span><br />
          {t('about.step0.3')}
        </>
      ),
      images: [
        {
          src: "/assets/IMG_2197.webp",
          alt: "Portrait",
          className: "top-[15%] left-[8%] w-[45vw] md:w-[18vw] max-w-[220px] aspect-[3/4] z-20 object-cover"
        },
        {
          src: "/assets/IMG_1180.webp",
          alt: "Texture",
          className: "bottom-[20%] right-[8%] w-[45vw] md:w-[18vw] max-w-[220px] aspect-[3/4] z-20 object-cover"
        }
      ]
    },
    {
      id: 1,
      content: (
        <>
          {t('about.step1.1')} <span className="font-serif italic text-white/80">{t('about.step1.publicity')}</span>{t('about.step1.2')} <span className="font-serif italic text-white/80">{t('about.step1.direction')}</span>{t('about.step1.3')} <span className="font-serif italic text-white/80">{t('about.step1.strategy')}</span>.
        </>
      ),
      images: [
        {
          src: "/assets/IMG_2201.webp",
          alt: "Tech",
          className: "top-[12%] right-[10%] w-[45vw] md:w-[16vw] max-w-[200px] aspect-[3/4] z-20 object-cover"
        },
        {
          src: "/assets/IMG_0990.webp",
          alt: "Abstract",
          className: "bottom-[15%] left-[10%] w-[45vw] md:w-[16vw] max-w-[200px] aspect-[3/4] z-20 object-cover"
        }
      ]
    },
    {
      id: 2,
      content: (
        <>
          {t('about.step2.1')} <span className="text-brand-light">{t('about.step2.auth')}</span> {t('about.step1.3')} <span className="text-brand-light">{t('about.step2.vision')}</span>.
        </>
      ),
      images: [
        {
          src: "/assets/gemini1.webp",
          alt: "Work",
          className: "top-[15%] left-[12%] w-[45vw] md:w-[18vw] max-w-[220px] aspect-[3/4] z-20 object-cover"
        },
        {
          src: "/assets/gemini2.webp",
          alt: "Team",
          className: "bottom-[15%] right-[12%] w-[45vw] md:w-[18vw] max-w-[220px] aspect-[3/4] z-20 object-cover"
        }
      ]
    }
  ];

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aboutSteps.length);
    }, 4500); // 4.5 seconds per slide to give enough reading time

    return () => clearInterval(interval);
  }, [aboutSteps.length]);

  return (
    <section id="sobre" className="relative bg-brand-black w-full text-white">

      {/* Main Auto-Carousel Container */}
      <div className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">

        {/* Background Images Layer */}
        <div className="absolute inset-0 w-full h-full max-w-screen-2xl mx-auto pointer-events-none">
          <AnimatePresence mode="popLayout">
            {aboutSteps[activeIndex].images.map((img, imgIdx) => (
              <motion.div
                key={`${activeIndex}-${imgIdx}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: imgIdx * 0.1
                }}
                className={`absolute rounded-lg overflow-hidden shadow-2xl border border-white/5 ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width="300"
                  height="400"
                  className="w-full h-full object-cover object-[50%_20%] opacity-80"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Area */}
        <div className="relative z-30 flex flex-col items-center justify-center p-6 w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-center bg-brand-black/40 backdrop-blur-md px-6 py-10 md:px-12 md:py-16 rounded-3xl border border-white/5 shadow-2xl w-full"
            >
              <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] md:leading-[1.1] tracking-tight text-white drop-shadow-lg">
                {aboutSteps[activeIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Navigation Dots */}
        <div className="absolute bottom-16 z-40 flex gap-3">
          {aboutSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-10 bg-brand-green' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Ir para etapa ${idx + 1}`}
            />
          ))}
        </div>

        {/* Background Gradients & Noise */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black/90 z-10 pointer-events-none" />
      </div>

      {/* Footer da Seção Sobre */}
      <div className="relative z-30 bg-brand-black py-24 px-6 md:px-12 text-center border-t border-white/5">
        <p className="text-brand-green font-mono text-sm uppercase tracking-[0.2em] mb-12">{t('about.stack')}</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 max-w-6xl mx-auto">
          {[
            t('about.stack.branding'),
            t('about.stack.direction'),
            t('about.stack.web'),
            t('about.stack.copy')
          ].map((skill, i, arr) => (
            <div key={i} className="flex items-center">
              <span className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/90 hover:text-brand-light transition-colors cursor-default">
                {skill}
              </span>
              {i < arr.length - 1 && (
                <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-brand-green/40 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;