import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Compass, PenTool, Key } from 'lucide-react';

const Metodo: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const etapas = [
        {
            letter: "R",
            title: "Reconhecimento",
            desc: "Imersão profunda na essência, histórico, mercado e concorrência da marca para entender o terreno onde pisamos.",
            icon: <Search className="w-5 h-5 text-[#45f2a1]" />
        },
        {
            letter: "I",
            title: "Identidade",
            desc: "Definição do DNA da marca: posicionamento estratégico, tom de voz e os pilares de diferenciação.",
            icon: <Map className="w-5 h-5 text-[#45f2a1]" />
        },
        {
            letter: "T",
            title: "Território",
            desc: "Construção de moodboards, benchmarking visual e escolha do caminho estético que reflete a nova autoridade.",
            icon: <Compass className="w-5 h-5 text-[#45f2a1]" />
        },
        {
            letter: "M",
            title: "Materialização",
            desc: "Criação da Identidade Visual (Logo, tipografia, cores) e de todos os materiais comerciais (pitch, site, assinaturas).",
            icon: <PenTool className="w-5 h-5 text-[#45f2a1]" />
        },
        {
            letter: "O",
            title: "Orquestração",
            desc: "Entrega completa do projeto com guias de uso, manuais da marca e direcionamento para aplicação imediata.",
            icon: <Key className="w-5 h-5 text-[#45f2a1]" />
        }
    ];

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/[0.06] pb-10"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="text-[#45f2a1] font-semibold tracking-widest uppercase text-sm font-sans">A Jornada</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111] leading-tight">
                            Metodologia <span className="font-light italic bg-gradient-to-r from-[#45f2a1] to-[#0c774e] bg-clip-text text-transparent">RITMO™</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-[#555] font-light max-w-md font-sans">
                        8 semanas. Do diagnóstico cru até uma marca monumental, pronta para o mercado.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8 md:gap-10 relative max-w-5xl mx-auto">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[39px] md:left-[55px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#45f2a1]/40 to-transparent z-0" />

                    {etapas.map((step, index) => (
                        <motion.div
                            key={step.letter}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative z-10 flex flex-col md:flex-row items-start gap-5 md:gap-10 group"
                        >
                            {/* Letter Circle */}
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#fafafa] border border-black/[0.08] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#45f2a1] group-hover:shadow-[0_0_30px_rgba(69,242,161,0.15)] shadow-sm">
                                <span className="font-serif text-3xl md:text-5xl font-light text-[#ccc] group-hover:text-[#45f2a1] transition-colors duration-500">
                                    {step.letter}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 bg-[#fafafa] border border-black/[0.06] p-6 md:p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#45f2a1]/30">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-white border border-black/[0.04] flex items-center justify-center shadow-sm">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#111]">
                                        {step.title}
                                    </h3>
                                </div>

                                <p className="text-[#555] text-base md:text-lg leading-relaxed font-light font-sans max-w-2xl">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metodo;
