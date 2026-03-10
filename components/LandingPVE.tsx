import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Target, Compass, Eye, Map as MapIcon, Layers, Fingerprint, BarChart, MonitorPlay, Shield, MessageCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPVE = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const ritmoSteps = [
        {
            id: 'R',
            title: 'Reconhecimento',
            desc: 'Antes de criar, precisamos entender. Nesta fase, investigamos a fundo a essência da marca, seu mercado, público e concorrência.',
            icon: <Target className="w-8 h-8 text-brand-green" />
        },
        {
            id: 'I',
            title: 'Identidade',
            desc: 'Definição do DNA da marca. A partir dos dados coletados, extraímos insights estratégicos para posicionamento, tom de voz e diferenciação.',
            icon: <Fingerprint className="w-8 h-8 text-brand-green" />
        },
        {
            id: 'T',
            title: 'Território',
            desc: 'Nenhuma marca vive isolada. Criamos moodboards, testamos conceitos e referências para garantir que a identidade esteja alinhada ao contexto visual correto.',
            icon: <MapIcon className="w-8 h-8 text-brand-green" />
        },
        {
            id: 'M',
            title: 'Materialização',
            desc: 'A identidade visual ganha forma. Desenvolvimento da linguagem visual da marca, explorando cores, tipografia, formas e aplicações para traduzir a essência do negócio.',
            icon: <Layers className="w-8 h-8 text-brand-green" />
        },
        {
            id: 'O',
            title: 'Orquestração',
            desc: 'A marca entra em sintonia com o mundo. Refinamento final, organização de guias visuais, aplicações e diretrizes para garantir consistência.',
            icon: <MonitorPlay className="w-8 h-8 text-brand-green" />
        }
    ];

    const scopeItems = [
        { title: 'Imersões de Marca', desc: 'Duas sessões profundas onde extraímos o máximo de informação possível do seu negócio para alinhar nossa rota.', icon: <Compass className="w-6 h-6" /> },
        { title: 'Seleção Arquetípica', desc: 'Com as informações necessárias definimos a sua tríade arquetípica, estrutura fundamental para seu posicionamento magnético.', icon: <Fingerprint className="w-6 h-6" /> },
        { title: 'Benchmarking', desc: 'Análise mercadológica focada no seu setor para descobrir brechas de oportunidade e diferenciação visual.', icon: <BarChart className="w-6 h-6" /> },
        { title: 'BrandCanvas', desc: 'Sua bússola estratégica. Uma ferramenta para consulta constante das diretrizes de marca, posicionamento e público.', icon: <Layers className="w-6 h-6" /> },
        { title: 'Identidade Visual', desc: 'Design intencional: Logotipo, tipografia, sistema de cores, elementos de composição, direção de arte e padrões.', icon: <Eye className="w-6 h-6" /> },
        { title: 'Identidade Verbal', desc: 'A voz que vende: Manifesto, tom de voz, palavras-chave de domínio, personalidade e roteiro base.', icon: <MessageCircle className="w-6 h-6" /> },
        { title: 'Manual de Marca', desc: 'Ferramenta definitiva para criações futuras de peças de comunicação da empresa, blindando sua consistência.', icon: <Shield className="w-6 h-6" /> },
        { title: 'Aplicações 360°', desc: 'Aplicações práticas e realistas do projeto em todos os seus pontos de contato, preparando a marca para a rua.', icon: <MonitorPlay className="w-6 h-6" /> },
    ];

    const stats = [
        { number: '+15', label: 'Projetos Realizados' },
        { number: '+2', label: 'Países de Atuação' },
        { number: '+20', label: 'Clientes Satisfeitos' },
    ];

    // Duplicado para efeito de marquee (carrossel infinito)
    const cases = [
        { name: 'Persist', image: 'https://placehold.co/800x600/121212/26ff6b?text=Persist' },
        { name: 'Solvia', image: 'https://placehold.co/800x600/121212/26ff6b?text=Solvia' },
        { name: 'Braem', image: 'https://placehold.co/800x600/121212/26ff6b?text=Braem' },
        { name: 'Persist', image: 'https://placehold.co/800x600/121212/26ff6b?text=Persist' },
        { name: 'Solvia', image: 'https://placehold.co/800x600/121212/26ff6b?text=Solvia' },
        { name: 'Braem', image: 'https://placehold.co/800x600/121212/26ff6b?text=Braem' },
    ];

    return (
        <div className="bg-brand-black bg-gradient-to-b from-[#1a1a1a] to-brand-black min-h-screen text-brand-white pt-24 font-sans selection:bg-brand-green/30 overflow-x-hidden">

            {/* 1. Hero Section com Parallax */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16 pb-20 pt-10 border-b border-brand-white/5">
                <div className="absolute inset-0 z-0 select-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.15, 0.3, 0.15]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-brand-green/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-brand-green/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
                    />
                </div>

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-green/30 bg-brand-green/5 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(38,255,107,0.1)]"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_10px_rgba(38,255,107,0.8)]"></span>
                        <span className="text-xs font-semibold tracking-widest text-brand-green uppercase">Posicionamento Premium</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 leading-[1.1]"
                    >
                        Sua marca exige <span className="font-semibold text-brand-green">mais do que estética.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-brand-white/80 max-w-3xl mb-14 font-light leading-relaxed"
                    >
                        Crio marcas com direção, clareza e propósito real. Saia na frente dos concorrentes, atraia clientes qualificados e aumente o valor percebido do seu negócio.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            to="/diagnostico"
                            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-brand-green text-brand-black font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(38,255,107,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <span className="relative z-10 text-lg">Reivindicar Posicionamento</span>
                            <ArrowRight className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. A Solução (Citação Impactante) */}
            <section className="py-32 px-4 md:px-8 lg:px-16 w-full relative">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -top-12 -left-12 text-brand-white/5 text-9xl font-serif leading-none select-none">"</div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12 relative z-10">
                            Uma única decisão <span className="text-brand-green italic font-light">pode mudar tudo.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl md:text-2xl text-brand-white/80 font-light leading-relaxed max-w-4xl"
                    >
                        A sua marca busca fortalecer sua presença no mercado, ajustando a comunicação aos novos desafios do setor. Nosso papel é materializar esse movimento, atuando profundamente desde a análise estratégica até o refinamento visual extremo, garantindo consistência cirúrgica em todos os seus pontos de contato.
                    </motion.p>
                </div>
            </section>

            {/* 3. A Nossa Metodologia (R.I.T.M.O) - Lista Vertical Otimizada */}
            <section className="py-32 px-4 md:px-8 lg:px-16 bg-brand-black relative">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-white/[0.02] via-transparent to-brand-white/[0.02]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-brand-white/10 pb-12">
                        <div className="max-w-2xl">
                            <div className="text-brand-green font-medium tracking-widest uppercase text-sm mb-4">A Lógica por Trás do Design</div>
                            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">Metodologia <span className="font-light">R.I.T.M.O</span></h2>
                        </div>
                        <p className="text-xl text-brand-white/80 font-light max-w-md">Desenvolvemos um método próprio para extrair a máxima clareza e alcançar soluções visuais inquestionáveis em 5 etapas.</p>
                    </div>

                    <div className="flex flex-col gap-12 relative max-w-5xl mx-auto">
                        <div className="absolute left-[39px] md:left-[55px] top-10 bottom-10 w-px bg-gradient-to-b from-brand-green/0 via-brand-green/30 to-brand-green/0 z-0"></div>

                        {ritmoSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-16 group"
                            >
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-brand-white/[0.03] border-2 border-brand-white/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-brand-green group-hover:bg-brand-green/5 group-hover:shadow-[0_0_30px_rgba(38,255,107,0.15)] backdrop-blur-md">
                                    <span className="text-3xl md:text-5xl font-light text-brand-white/30 group-hover:text-brand-green transition-colors duration-500">{step.id}</span>
                                </div>

                                <div className="pt-2 md:pt-6 flex-1 bg-brand-white/[0.02] border border-brand-white/5 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:bg-brand-white/[0.04] hover:border-brand-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        {step.icon}
                                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{step.title}</h3>
                                    </div>
                                    <p className="text-brand-white/80 text-lg md:text-xl leading-relaxed font-light mt-4">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. O Que Entregamos (Escopo Completo com Hover Effects) */}
            <section className="py-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-t border-brand-white/5">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-semibold mb-6">Arsenais de Marca</h2>
                    <p className="text-xl text-brand-white/80 font-light max-w-2xl mx-auto">O serviço de Posicionamento Visual Estratégico entrega um ecossistema completo para a sua empresa dominar o mercado.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {scopeItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group relative bg-brand-white/5 border border-brand-white/10 p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-green/50 hover:bg-brand-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-brand-black/50 border border-brand-white/10 flex items-center justify-center text-brand-green mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-brand-white/70 font-light text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. Autoridade e Cases (Marquee) */}
            <section className="py-32 border-y border-brand-white/5 overflow-hidden bg-brand-white/[0.01]">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-brand-white/10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center py-6 md:py-0"
                            >
                                <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green/80 tracking-tighter mb-4">{stat.number}</div>
                                <div className="text-sm text-brand-white/80 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Marquee de Cases */}
                <div className="relative w-full">
                    <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

                    <div className="flex w-[200%] sm:w-fit">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            className="flex gap-6 px-3"
                        >
                            {cases.map((project, i) => (
                                <div key={i} className="w-[300px] md:w-[450px] lg:w-[600px] shrink-0 group cursor-pointer relative rounded-2xl overflow-hidden border border-brand-white/10">
                                    <div className="aspect-[4/3] bg-brand-white/5">
                                        <img
                                            src={project.image}
                                            alt={`Case ${project.name}`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-brand-green font-medium text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Case Study</p>
                                        <h4 className="text-3xl font-semibold text-brand-white">{project.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Hook de Vendas, Investimento e Chamada Final */}
            <section className="py-40 px-4 md:px-8 lg:px-16 relative overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-brand-green/10 blur-[200px] rounded-full pointer-events-none mix-blend-screen"></div>
                </div>

                {/* Agitação do Problema (Sales Hook) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-3xl border border-brand-white/10 bg-brand-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl mb-16 text-center"
                >
                    <AlertTriangle className="w-12 h-12 text-brand-green mx-auto mb-6" />
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">Seu visual atual atrai o cliente que você quer ou o cliente que só busca preço?</h3>
                    <p className="text-brand-white/80 text-lg font-light leading-relaxed">
                        A falta de posicionamento está custando vendas agora mesmo. Empresas que parecem comuns são cobradas como comuns. Transformar a sua percepção de valor não é um gasto, é o único investimento que blinda sua margem de lucro.
                    </p>
                </motion.div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-semibold mb-12 tracking-tight text-center"
                    >
                        Sua nova era <span className="text-brand-green font-light italic">começa aqui.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-14 p-1 rounded-3xl bg-gradient-to-b from-brand-white/30 to-brand-white/10 w-full max-w-md shadow-2xl"
                    >
                        <div className="bg-brand-black/90 rounded-[23px] py-8 px-12 flex flex-col items-center justify-center h-full relative overflow-hidden backdrop-blur-xl">
                            <div className="absolute inset-0 bg-brand-green/10 blur-xl"></div>
                            <p className="text-sm text-brand-white/80 font-medium tracking-widest uppercase mb-3 relative z-10">Investimento a partir de</p>
                            <div className="flex items-start gap-2 relative z-10">
                                <span className="text-xl text-brand-green font-semibold mt-2">R$</span>
                                <span className="text-brand-white font-bold text-6xl tracking-tighter">2.000<span className="text-3xl text-brand-white/50 font-normal">,00</span></span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <Link
                            to="/diagnostico"
                            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-brand-white text-brand-black font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] w-full md:w-auto text-xl"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-green via-white to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 bg-[length:200%_auto] animate-gradient"></div>
                            <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-full"></div>
                            <span className="relative z-10">Agendar Diagnóstico Estratégico</span>
                            <ArrowRight className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
                        </Link>
                        <p className="mt-6 text-brand-white/40 text-sm font-light flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Aplicação gratuita e sem compromisso.
                        </p>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default LandingPVE;
