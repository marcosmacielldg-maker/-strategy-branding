import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "../lib/i18n";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{ text: string; image: string; name: string; role: string }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/5"
              >
                <Quote className="w-6 h-6 text-brand-light/40 mb-4 group-hover:text-brand-light transition-colors" />
                <p className="text-white/90 leading-relaxed font-light mb-6">
                  "{text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative overflow-hidden rounded-full w-10 h-10 border border-white/20">
                    <img
                      src={image}
                      alt={name}
                      width="40"
                      height="40"
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-medium text-white tracking-wide">
                      {name}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-brand-light transition-colors">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('feedbacks.patricia.text'),
      image: "/assets/fotos-depoimentos/patricia-persist.webp",
      name: "Patrícia",
      role: t('feedbacks.patricia.role'),
    },
    {
      text: t('feedbacks.pamela.text'),
      image: "/assets/fotos-depoimentos/pamela-liz.webp",
      name: "Pamela Liz",
      role: t('feedbacks.pamela.role'),
    },
    {
      text: t('feedbacks.gabriela.text'),
      image: "/assets/fotos-depoimentos/gabriela-borsato.webp",
      name: "Gabriela Borsato",
      role: t('feedbacks.gabriela.role'),
    },
    {
      text: t('feedbacks.barbara.text'),
      image: "/assets/fotos-depoimentos/barbara-santos.webp",
      name: "Bárbara Santos",
      role: t('feedbacks.barbara.role'),
    },
    {
      text: t('feedbacks.flavio.text'),
      image: "/assets/fotos-depoimentos/flavio-solique.webp",
      name: "Flávio",
      role: t('feedbacks.flavio.role'),
    },
    {
      text: t('feedbacks.vanessa.text'),
      image: "/assets/fotos-depoimentos/vanessa-mieres.webp",
      name: "Vanessa Mieres",
      role: t('feedbacks.vanessa.role'),
    }
  ];

  // Distribuição dos 6 depoimentos em 3 colunas
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section id="feedbacks" className="bg-brand-green py-24 md:py-32 relative overflow-hidden z-20">

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-green to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-green to-transparent z-10 pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-md">
            {t('feedbacks.badge')}
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            {t('feedbacks.impact')} <br />
            <span className="font-serif italic text-brand-light">{t('feedbacks.strategy')}</span>
          </h2>
          <p className="text-white/60 text-lg font-light max-w-lg leading-relaxed">
            {t('feedbacks.desc')}
          </p>
        </motion.div>

        {/* Columns Container */}
        <div className="flex justify-center gap-6 max-h-[700px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={45} className="w-full md:w-1/2 lg:w-1/3" />
          <TestimonialsColumn testimonials={secondColumn} duration={55} className="hidden md:block md:w-1/2 lg:w-1/3" />
          <TestimonialsColumn testimonials={thirdColumn} duration={50} className="hidden lg:block lg:w-1/3" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;