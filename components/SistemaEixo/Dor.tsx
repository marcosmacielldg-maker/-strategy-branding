import React from 'react';
import { motion } from 'framer-motion';

const Dor: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const dores = [
        {
            num: "01",
            title: "Marca que não transmite autoridade",
            desc: "Logo criado no começo, sem estratégia, sem consistência. Dificulta muito justificar e cobrar um ticket premium pelo seu serviço."
        },
        {
            num: "02",
            title: "Materiais que não convencem",
            desc: "Apresentações sem narrativa, propostas sem força visual. O cliente sente que precisa pensar mais antes de fechar o negócio."
        },
        {
            num: "03",
            title: "Sem diferenciação clara",
            desc: "Concorrentes menores com marcas melhores parecem maiores que você. A comunicação fraca não sustenta o seu preço final."
        }
    ];

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden border-y border-black/[0.06]">

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 max-w-3xl"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-[#45f2a1] font-semibold tracking-widest uppercase text-sm font-sans">O Problema Real</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.15] text-[#111] mb-8 tracking-tight">
                        Sua empresa entrega excelência,<br className="hidden md:block" />
                        mas sua marca parece <span className="italic font-light bg-gradient-to-r from-[#45f2a1] to-[#0c774e] bg-clip-text text-transparent">amadora</span>.
                    </h2>

                    <p className="font-sans text-lg md:text-xl font-light text-[#555] leading-relaxed max-w-2xl">
                        Você investiu anos construindo um negócio sólido. Seus resultados são reais. Mas quando um cliente potencial visita o site ou recebe sua proposta comercial — a percepção visual destrói a sua autoridade.
                    </p>
                </motion.div>

                {/* Grid of Pains */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {dores.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className="relative bg-[#fafafa] border border-black/[0.06] rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#45f2a1]/30 group"
                        >
                            {/* Decorative number */}
                            <span className="absolute top-6 right-8 font-serif text-6xl md:text-7xl font-bold text-black/[0.03] pointer-events-none select-none leading-none group-hover:text-[#45f2a1]/10 transition-colors duration-500">
                                {item.num}
                            </span>

                            <h4 className="font-serif text-xl md:text-2xl font-bold text-[#111] mb-4 mt-8 line-clamp-2 leading-tight pr-10">
                                {item.title}
                            </h4>

                            <p className="font-sans text-sm md:text-base font-light text-[#666] leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Accent line effect at the bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#45f2a1] to-[#34d399] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dor;
