import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FinalCTA: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-[#fafafa] relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[60vh]">

            {/* Background Huge Text Overlay with Parallax */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <motion.div
                    style={{ y: yTransform }}
                    className="font-serif text-[12rem] md:text-[20rem] lg:text-[28rem] font-bold italic text-black/[0.02] select-none whitespace-nowrap leading-none tracking-tighter"
                >
                    SISTEMA EIXO
                </motion.div>
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto relative z-10 flex flex-col items-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-8 md:mb-10 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#111] animate-pulse" />
                    <span className="text-[10px] md:text-xs font-semibold tracking-widest text-[#111] uppercase">Próximo passo</span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] text-[#111] tracking-tight mb-8">
                    Sua marca está pronta <br />
                    para <span className="italic font-light bg-gradient-to-r from-[#45f2a1] to-[#0c774e] bg-clip-text text-transparent">escalar</span> o seu valor?
                </h2>

                <p className="font-sans text-lg md:text-xl font-light text-[#555] leading-relaxed mb-12 max-w-2xl mx-auto">
                    Empresas que entregam muito precisam de uma marca que transmita o mesmo peso. O Sistema EIXO™ é para quem quer parar de perder negócios e justificar o seu preço final.
                </p>

                <a href="#proposta" className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#111] text-white font-semibold rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                    <div className="absolute inset-0 bg-[#45f2a1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    <span className="relative z-10 text-sm tracking-widest uppercase group-hover:text-[#111] transition-colors duration-300">Quero Posicionar Minha Marca</span>
                </a>
            </motion.div>
        </section>
    );
};

export default FinalCTA;
