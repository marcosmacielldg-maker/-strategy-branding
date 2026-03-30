import React from 'react';
import { motion } from 'framer-motion';

/* ═══════════════════════════════════════════════
   DEPOIMENTOS — Split Layout
   Baseado na nova referência: lado esquerdo verde
   com os depoimentos, lado direito imagem grande
═══════════════════════════════════════════════ */

const depoimentos = [
    {
        text: 'A YW Lab Studio tomou forma, cores e personalidade pelas mãos do Marcos. O processo criativo foi leve e intenso. Somos muito felizes pelo resultado final que ecoa e ecoará por muitos anos. Somos muito gratos pelo olhar minucioso e apresentação excelente.',
        author: 'Pamela Liz',
        role: 'CEO da YW Lab Studio',
        logoText: 'yw lab',
        initial: 'Y',
        active: false,
    },
    {
        text: 'Marcos, seu trabalho é excepcional. Você conseguiu transformar nossas conversas e ideias em algo concreto, capturando com precisão a essência da marca. Não apenas trouxe o que debatemos, mas foi além. Num mundo onde muitos fazem o mínimo, você entrega. Isso inspira.',
        author: 'Patrícia',
        role: 'CEO da Persist',
        logoText: 'persist',
        initial: 'P',
        active: true, // Card de destaque da imagem de ref
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Depoimentos: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                    {/* Lado Esquerdo — Fundo Verde */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#1a5b3f] rounded-[2rem] p-8 md:p-12 lg:p-14 flex flex-col justify-between hide-scrollbar"
                    >
                        {/* Header Local */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-white leading-[1.2] tracking-[-0.02em]">
                                Trabalho com marcas que querem mais do que estética.
                                <br />
                                <em className="font-serif italic font-normal text-brand-green/90">
                                    Crio Marcas
                                </em>{' '}
                                com direção, clareza e propósito real.
                            </h2>
                        </div>

                        {/* Lista de Depoimentos */}
                        <div className="flex flex-col gap-4">
                            {depoimentos.map((dep, i) => (
                                <div
                                    key={i}
                                    className={`rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 ${dep.active
                                            ? 'bg-white/10 border border-white/20' // Destaque suave como na ref
                                            : 'bg-transparent border border-white/[0.15] hover:bg-white/5'
                                        }`}
                                >
                                    {/* Author row */}
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${dep.active ? 'bg-[#ff6b4a] text-white' : 'bg-[#f4d03f] text-[#111]'
                                            }`}>
                                            {dep.initial}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-[15px]">{dep.author} <span className="text-white/60 font-light">— {dep.role}</span></p>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <p className="text-white/80 font-light leading-relaxed text-sm md:text-[15px]">
                                        {dep.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Lado Direito — Foto Desktop/Lifestyle */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-[2rem] overflow-hidden min-h-[400px] lg:min-h-full"
                    >
                        {/* Usando a foto do dono da agência trabalhando (referência) */}
                        <img
                            src="/assets/74.webp"
                            alt="Marcos - Estratégia e Branding"
                            className="absolute inset-0 w-full h-full object-cover object-center bg-[#eee]"
                            loading="lazy"
                            width="800"
                            height="1000"
                            onError={(e) => {
                                // Fallback se a 74 não existir ou quebrar
                                (e.target as HTMLImageElement).src = '/assets/IMG_1180.webp';
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Depoimentos;
