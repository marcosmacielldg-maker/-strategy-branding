import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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

// aboutSteps moved inside component

interface TextBlockProps {
  data: AboutStep;
  index: number;
  setActiveIndex: (i: number) => void;
}

// Componente para renderizar cada bloco de texto e detectar quando está visível
const TextBlock: React.FC<TextBlockProps> = ({ data, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-screen min-h-[100dvh] flex items-center justify-center p-6 relative z-30 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-20%" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="max-w-4xl text-center pointer-events-auto bg-brand-black/20 backdrop-blur-sm p-6 rounded-2xl"
      >
        <p className="text-2xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-2xl">
          {data.content}
        </p>
      </motion.div>
    </div>
  );
};


const About: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Definição dos dados: Texto + Configuração das imagens flutuantes para cada etapa
  // Moved inside component to use 't'
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

  // Removed static creativeStack

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aboutSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section
      id="sobre"
      className={`relative bg-brand-black w-full text-white ${isMobile ? 'h-[100dvh] overflow-hidden' : ''}`}
    >

      {/* 
        CAMADA STICKY (IMAGENS FLUTUANTES) 
        Fica fixa no fundo enquanto o usuário rola a página no desktop.
        No mobile, é apenas o fundo fixo.
      */}
      <div className={`
        ${isMobile ? 'absolute inset-0' : 'sticky top-0 left-0'} 
        w-full h-screen h-[100dvh] overflow-hidden pointer-events-none
      `}>
        <div className="absolute inset-0 w-full h-full max-w-screen-2xl mx-auto relative">
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
                  className="w-full h-full object-cover object-[50%_20%] opacity-90"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Background Noise/Grid Sutil (Fixo) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black z-0 pointer-events-none" />
      </div>

      {/* 
        CAMADA DE SCROLL (TEXTO) - DESKTOP ONLY
      */}
      {!isMobile && (
        <div className="relative z-10 -mt-[100vh]">
          {aboutSteps.map((step, index) => (
            <TextBlock
              key={step.id}
              data={step}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
          {/* Footer da Seção Sobre (Dentro do fluxo de scroll no desktop) */}
          <div className="relative z-30 bg-brand-black pt-32 pb-24 px-6 md:px-12 text-center border-t border-white/5">
            <p className="text-brand-green font-mono text-sm uppercase tracking-[0.2em] mb-12">{t('about.stack')}</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-6xl mx-auto">
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
                  {/* Separador (Dot) exceto para o último item */}
                  {i < arr.length - 1 && (
                    <div className="hidden md:block w-2 h-2 rounded-full bg-brand-green/50 ml-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 
        CAMADA AUTO-PLAY (TEXTO) - MOBILE ONLY
      */}
      {isMobile && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 pb-24 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl text-center pointer-events-auto bg-brand-black/20 backdrop-blur-sm p-6 rounded-2xl"
            >
              <p className="text-2xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                {aboutSteps[activeIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators for Mobile */}
          <div className="absolute bottom-32 flex gap-2">
            {aboutSteps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-brand-green' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>

          {/* Simple Stack list at bottom very small? Or hide on mobile? 
              User didn't specify, but better to show it somewhere or hide it. 
              Given the "screen height" constraint, maybe hide stack or put it very subtle at bottom.
              Let's omit stack on mobile for now to keep it clean as requested "Auto carousel".
          */}
        </div>
      )}

    </section>
  );
};

export default About;