import React from 'react';
import { motion } from 'framer-motion';

const Entregaveis: React.FC = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const entregas = [
        { icon: "01", title: "2x Imersões de Marca", desc: "Sessões estratégicas para extrair o máximo do negócio e definir caminhos clarificados.", isDestaque: false },
        { icon: "02", title: "Seleção Arquetípica", desc: "Definição da sua tríade arquetípica — para posicionamento e diferenciação real.", isDestaque: false },
        { icon: "03", title: "Benchmarking", desc: "Análise mercadológica profunda para orientar decisões competitivas com precisão.", isDestaque: false },
        { icon: "04", title: "Identidade Visual", desc: "Logotipo, tipografia, cores, elementos, padrões e um sistema visual rico completo.", isDestaque: false },
        { icon: "05", title: "Identidade Verbal", desc: "Voz da marca, manifesto, tom corporativo, palavras-chave e bordões estratégicos.", isDestaque: false },
        { icon: "06", title: "Manual de Marca", desc: "BrandBook completo para orientar as criações do seu time futuro com consistência.", isDestaque: false },
        { icon: "07", title: "Landing Page", desc: "Página de vendas focada em performance para capturar seu cliente e escalar ticket.", isDestaque: true },
        { icon: "08", title: "Pitch de Vendas", desc: "Playbook em forma de apresentação (Slide) com narrativa profissional ao vivo.", isDestaque: true }
    ];

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#fafafa] relative overflow-hidden border-y border-black/[0.06]">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="text-[#45f2a1] font-semibold tracking-widest uppercase text-sm font-sans">O Entregável</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#111] tracking-tight">
                        Tudo que sua empresa precisa <br className="hidden md:block" />
                        para <span className="italic font-light bg-gradient-to-r from-[#45f2a1] to-[#0c774e] bg-clip-text text-transparent">dominar</span> o mercado.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {entregas.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className={`p-8 rounded-2xl relative transition-all duration-500 border ${item.isDestaque
                                    ? 'bg-white border-[#45f2a1]/40 shadow-[0_8px_30px_rgba(69,242,161,0.08)] hover:shadow-[0_8px_40px_rgba(69,242,161,0.15)] hover:-translate-y-1'
                                    : 'bg-white border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#45f2a1]/20 hover:-translate-y-1'
                                }`}
                        >
                            {item.isDestaque && (
                                <span className="absolute top-4 right-4 bg-[#45f2a1]/10 text-[#0c774e] border border-[#45f2a1]/30 font-sans font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                                    Novidade
                                </span>
                            )}
                            <span className="block font-serif text-4xl text-[#111]/10 mb-6 font-bold group-hover:text-[#45f2a1]/30 transition-colors">
                                {item.icon}
                            </span>
                            <h4 className="font-serif text-xl font-bold text-[#111] mb-3 leading-tight pr-4">
                                {item.title}
                            </h4>
                            <p className="font-sans text-sm font-light text-[#666] leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bônus */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 p-8 md:p-10 rounded-2xl border border-black/[0.06] bg-gradient-to-br from-white to-[#fafafa] flex flex-col md:flex-row items-start md:items-center gap-6 justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-[#45f2a1] animate-pulse" />
                            <span className="text-xs font-sans font-bold tracking-widest uppercase text-[#0c774e]">Bônus Exclusivo</span>
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-[#111]">3 Consultorias Pós-Projeto</h3>
                        <p className="font-sans text-base font-light text-[#555] mt-3 max-w-2xl leading-relaxed">
                            Suporte estratégico de livre escolha após a entrega para garantir que sua marca siga crescendo e aplicando todo o sistema com perfeição na prática competitiva.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-[#fafafa] border border-black/[0.06] flex items-center justify-center text-[#45f2a1]">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Entregaveis;
