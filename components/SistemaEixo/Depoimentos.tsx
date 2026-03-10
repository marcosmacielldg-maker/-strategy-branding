import React from 'react';
import { motion } from 'framer-motion';

const Depoimentos: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const depoimentos = [
        {
            text: "Seu trabalho é excepcional. Você conseguiu transformar nossas conversas e ideias em algo concreto, capturando com precisão a essência da marca. Mais do que técnica, você entregou presença, dedicação e aquele algo a mais que poucos oferecem.",
            author: "Patrícia Alburque",
            role: "CEO — Persist",
            initial: "P"
        },
        {
            text: "Realmente ficou muito bom. A questão de cores funcionou de uma forma indescritível e o encaixe das letras ficou perfeito. Vocês sempre entregam mais do que eu esperava. Ficou maravilhoso.",
            author: "Bárbara Santos",
            role: "CEO — Braem",
            initial: "B"
        },
        {
            text: "O cuidado em cada detalhe, a atenção e o capricho no design fizeram uma diferença enorme. Tenho recebido elogios de clientes justamente sobre o visual — isso mostra como o seu trabalho agrega valor de verdade.",
            author: "Flávio",
            role: "CEO — Solique",
            initial: "F"
        }
    ];

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden border-b border-black/[0.06]">

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 text-center flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-[#45f2a1] font-semibold tracking-widest uppercase text-sm font-sans">Resultados Reais</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] text-[#111] tracking-tight max-w-2xl mx-auto">
                        Marcas que transformaram <span className="italic font-light bg-gradient-to-r from-[#45f2a1] to-[#0c774e] bg-clip-text text-transparent">percepção</span> em resultados concretos.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {depoimentos.map((depo, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className="bg-[#fafafa] border border-black/[0.06] rounded-2xl p-8 lg:p-10 relative flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#45f2a1]/30 transition-all duration-500 group"
                        >
                            {/* Decorative Quote Mark */}
                            <span className="absolute top-6 right-8 font-serif text-6xl md:text-8xl text-black/[0.03] group-hover:text-[#45f2a1]/10 transition-colors duration-500 font-black select-none pointer-events-none leading-none">
                                "
                            </span>

                            <div>
                                <p className="font-sans text-sm md:text-base font-light text-[#555] leading-relaxed italic mb-10 mt-6 relative z-10">
                                    "{depo.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/[0.04] relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white border border-black/[0.06] flex items-center justify-center font-serif text-xl font-bold text-[#111] group-hover:text-[#0c774e] group-hover:bg-[#45f2a1]/10 flex-shrink-0 transition-colors duration-500 shadow-sm">
                                    {depo.initial}
                                </div>
                                <div>
                                    <strong className="block font-sans text-sm md:text-base font-bold text-[#111]">
                                        {depo.author}
                                    </strong>
                                    <span className="block font-sans text-xs uppercase tracking-widest text-[#999] mt-1 pr-2">
                                        {depo.role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Depoimentos;
