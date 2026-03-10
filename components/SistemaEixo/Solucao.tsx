import React from 'react';
import { motion } from 'framer-motion';
import { Target, PenTool, LayoutTemplate } from 'lucide-react'; // Generic relevant icons

const Solucao: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const frentes = [
        {
            num: "01",
            title: "Inteligência de Posicionamento",
            desc: "Diagnóstico de marca, análise mercadológica, arquétipos e definição do seu território único no mercado competitivo.",
            icon: <Target className="w-6 h-6" />
        },
        {
            num: "02",
            title: "Arquitetura Visual",
            desc: "Logotipo, sistema de cores, tipografia e diretrizes claras que orientam cada decisão criativa da sua empresa no futuro.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            num: "03",
            title: "Arsenal de Conversão",
            desc: "Landing page estratégica, pitch de vendas e materiais que facilitam o fechamento de negócios frente ao cliente.",
            icon: <LayoutTemplate className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#fafafa] relative overflow-hidden">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-20 lg:mb-24">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="text-[#45f2a1] font-semibold tracking-widest uppercase text-sm font-sans">A Solução</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#111] tracking-tight">
                            O Sistema EIXO™
                            <br className="hidden md:block" />
                            não é design.<br />
                            <span className="italic font-light bg-gradient-to-r from-[#45f2a1] to-[#0c774e] bg-clip-text text-transparent">É estratégia.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="font-sans text-lg md:text-xl font-light text-[#555] leading-relaxed max-w-lg mb-4">
                            O EIXO é a peça que faz a engrenagem girar sem quebrar. Alinhamos sua identidade visual, seu posicionamento e seus materiais comerciais em um sistema único — para que sua marca transmita o tamanho real que o seu negócio carrega.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {frentes.map((frente, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className="group relative bg-white border border-black/[0.06] rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#45f2a1]/40 hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#45f2a1]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#fafafa] border border-black/[0.04] flex items-center justify-center text-[#111] group-hover:bg-[#45f2a1]/10 group-hover:text-[#0c774e] group-hover:border-[#45f2a1]/20 transition-all duration-500">
                                        {frente.icon}
                                    </div>
                                    <div className="font-sans text-xs font-semibold tracking-widest text-[#999] group-hover:text-[#45f2a1] transition-colors duration-500 bg-[#fafafa] px-3 py-1 rounded-full border border-black/[0.04]">
                                        ETAPA {frente.num}
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[#111] group-hover:text-[#0c774e] transition-colors duration-500 mb-6 leading-tight">
                                    {frente.title}
                                </h3>
                            </div>
                            <p className="relative z-10 font-sans text-sm md:text-base font-light text-[#555] leading-relaxed mt-4">
                                {frente.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solucao;
