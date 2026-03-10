import React, { useState } from 'react';
import { Fingerprint, Sprout, Crosshair, Mountain, Wind, ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../lib/i18n';

// steps moved inside component

const Methodology: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      id: 0,
      letter: 'R',
      rest: t('method.step0.title').substring(1), // Assuming 'Reconhecimento' -> 'econhecimento'
      subtitle: 'COLETA DE DADOS',
      description: t('method.step0.desc'),
      bgClass: 'bg-[#347C5E]',
      letterColor: 'text-[#86efac]',
      textColor: 'text-white',
      subtitleColor: 'text-white/60',
      descriptionColor: 'text-white/90',
      image: '/assets/ritmo/reconhecimento.webp'
    },
    {
      id: 1,
      letter: 'I',
      rest: t('method.step1.title').substring(1),
      subtitle: 'ANÁLISE ESTRATÉGICA',
      description: t('method.step1.desc'),
      bgClass: 'bg-[#1D4E4C]',
      letterColor: 'text-[#5eead4]',
      textColor: 'text-white',
      subtitleColor: 'text-white/60',
      descriptionColor: 'text-white/90',
      image: '/assets/ritmo/identidade.webp'
    },
    {
      id: 2,
      letter: 'T',
      rest: t('method.step2.title').substring(1),
      subtitle: 'TERRITÓRIO',
      description: t('method.step2.desc'),
      bgClass: 'bg-[#132A46]',
      letterColor: 'text-[#60a5fa]',
      textColor: 'text-white',
      subtitleColor: 'text-white/60',
      descriptionColor: 'text-white/90',
      image: '/assets/ritmo/território.webp'
    },
    {
      id: 3,
      letter: 'M',
      rest: t('method.step3.title').substring(1),
      subtitle: 'PROCESSO CRIATIVO',
      description: t('method.step3.desc'),
      bgClass: 'bg-[#EFB02E]',
      letterColor: 'text-[#433621]',
      textColor: 'text-white',
      subtitleColor: 'text-white/60',
      descriptionColor: 'text-white/90',
      image: '/assets/ritmo/materialização.webp'
    },
    {
      id: 4,
      letter: 'O',
      rest: t('method.step4.title').substring(1),
      subtitle: 'ENTREGA FINAL',
      description: t('method.step4.desc'),
      bgClass: 'bg-[#433621]',
      letterColor: 'text-[#EFB02E]',
      textColor: 'text-white',
      subtitleColor: 'text-white/60',
      descriptionColor: 'text-white/90',
      image: '/assets/ritmo/orquestração.webp'
    }
  ];

  return (
    <section id="metodologia" className="py-24 md:py-32 px-4 md:px-12 bg-white relative z-20">
      <div className="max-w-screen-xl mx-auto">

        {/* Header Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <span className="block text-xs md:text-sm tracking-[0.2em] uppercase text-brand-black/40 mb-2 ml-1 text-left font-medium">
              Metodologia
            </span>
            <h2 className="font-serif italic text-[5rem] leading-[0.85] md:text-7xl lg:text-8xl tracking-tighter text-brand-black max-w-4xl text-left uppercase">
              RITMO
            </h2>
          </div>
          <div className="max-w-md pb-2 flex flex-col gap-3">
            <p className="text-brand-black/60 font-light leading-relaxed text-sm md:text-base text-justify md:text-left">
              {t('method.desc')}
            </p>
            <div className="flex items-center gap-2 text-brand-green/80 text-xs font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
              <span className="italic">Passe o mouse para descobrir</span>
            </div>
          </div>
        </div>

        {/* Horizontal Accordion Layout */}
        <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[600px] w-full">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between p-8",
                  step.bgClass,
                  "h-[450px] lg:h-auto",
                  "w-full lg:w-auto",
                  isHovered ? "lg:flex-[5]" : "lg:flex-1"
                )}
              >
                {/* Top Content: Icon + Title */}
                <div className="flex flex-col items-start z-20 pointer-events-none">
                  {/* Icon Image */}
                  <div className={cn(
                    "mb-6 p-4 rounded-full backdrop-blur-sm border shadow-lg transition-colors flex items-center justify-center",
                    step.id === 3 ? "bg-black/5 border-black/5" : "bg-white/10 border-white/10"
                  )}>
                    <img
                      src={step.image}
                      alt={step.subtitle}
                      width="48"
                      height="48"
                      loading="lazy"
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>

                  {/* Title Row - Items Baseline to align R and econhecimento */}
                  {/* Removed overflow-hidden from this container to prevent clipping letters like 'R' or 'j' */}
                  <div className="flex items-baseline relative z-10 -ml-1">
                    {/* Big Letter */}
                    <span className={cn(
                      "text-8xl md:text-9xl font-serif italic tracking-tighter leading-[0.8] shrink-0 transition-colors duration-300 py-2",
                      step.letterColor
                    )}>
                      {step.letter}
                    </span>

                    {/* Rest of the word - Reveal Animation via Width */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                        isHovered ? "max-w-[400px] opacity-100" : "lg:max-w-0 lg:opacity-0 max-w-[400px] opacity-100"
                      )}
                    >
                      <span className={cn(
                        "text-4xl md:text-5xl font-serif tracking-wide ml-0.5 whitespace-nowrap py-2 block",
                        step.textColor
                      )}>
                        {step.rest}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Content: Description */}
                <div
                  className={cn(
                    "relative z-20 flex flex-col items-start text-left mt-auto transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden pointer-events-none",
                    // Use max-height for reveal effect instead of fade
                    isHovered ? "max-h-[300px] opacity-100" : "lg:max-h-0 lg:opacity-0 max-h-[300px] opacity-100"
                  )}
                >
                  {/* Fixed width inner container to prevent text reflow during expansion */}
                  <div className="min-w-[300px] md:min-w-[400px] pt-4">
                    <span className={cn("text-xs font-bold tracking-[0.2em] uppercase mb-3 block", step.subtitleColor)}>
                      {step.subtitle}
                    </span>
                    <p className={cn("text-lg md:text-xl font-light leading-relaxed max-w-lg", step.descriptionColor)}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Background Texture/Gradient Overlay */}
                {/* Shadow is REMOVED (opacity-0) when hovered */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500",
                  isHovered ? "opacity-0" : "opacity-40"
                )} />
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex items-center justify-center w-full">
          <a
            href="#contato"
            className="
                    relative group flex items-center gap-4 px-10 py-5
                    rounded-full border border-brand-black/10 bg-transparent 
                    hover:border-brand-green transition-all duration-300
                "
          >
            <span className="text-lg font-medium tracking-wide text-brand-black group-hover:text-brand-green transition-colors">
              Iniciar projeto com esta metodologia
            </span>
            <ArrowDown className="w-5 h-5 text-brand-black group-hover:text-brand-green group-hover:translate-y-1 transition-all duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Methodology;