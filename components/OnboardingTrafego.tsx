import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../lib/utils';
import { AnimatedGridPattern } from './ui/animated-grid-pattern';
import {
    Cpu, Share2, Search, Key, FileText, BarChart3, Target, Settings,
    Clock, Paintbrush, Users, Crosshair, Filter, Ban, MessageSquare, Coins,
    CheckCircle2, TrendingUp, ArrowRight, Zap, AlertCircle, ArrowDown
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   OFFICIAL PLATFORM SVG ICONS
═══════════════════════════════════════════════ */

const IconGoogleAds = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7 135.2l52.4-90.8c11-19 35.2-25.6 54.2-14.6 19 11 25.6 35.2 14.6 54.2l-52.4 90.8c-11 19-35.2 25.6-54.2 14.6-19-11-25.6-35.2-14.6-54.2z" fill="#FBBC04" />
        <path d="M130.4 42l52.4 90.8c11 19 4.4 43.2-14.6 54.2-19 11-43.2 4.4-54.2-14.6L61.6 81.6l23.2-40.2c11-19 35.2-25.6 54.2-14.6-.4.4-8.6 15.2-8.6 15.2z" fill="#4285F4" />
        <circle cx="48" cy="160" r="32" fill="#34A853" />
    </svg>
);

const IconYouTube = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 28.57 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.97 3.12A3.58 3.58 0 0025.45.6C23.21 0 14.28 0 14.28 0S5.36 0 3.12.6A3.58 3.58 0 00.6 3.12C0 5.36 0 10 0 10s0 4.64.6 6.88a3.58 3.58 0 002.52 2.52C5.36 20 14.28 20 14.28 20s8.93 0 11.17-.6a3.58 3.58 0 002.52-2.52C28.57 14.64 28.57 10 28.57 10s0-4.64-.6-6.88z" fill="#FF0000" />
        <path d="M11.43 14.28L18.85 10l-7.42-4.28v8.56z" fill="#fff" />
    </svg>
);

const IconMeta = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6 20c-6.2 0-10.5 4.7-13.1 10.3C2.1 35.5 1 40.6 1 45c0 4.4 1.1 9.5 3.5 14.7C7.1 65.3 11.4 70 17.6 70c3.6 0 6.5-1.7 9.3-5 1.5-1.7 3-3.8 4.4-6.3l.9-1.5.9 1.5c1.4 2.5 2.9 4.6 4.4 6.3 2.8 3.3 5.7 5 9.3 5 6.2 0 10.5-4.7 13.1-10.3C62.3 54.5 63.4 49.4 63.4 45c0-4.4-1.1-9.5-3.5-14.7C57.3 24.7 53 20 46.8 20c-3.6 0-6.5 1.7-9.3 5-1.5 1.7-3 3.8-4.4 6.3l-.9 1.5-.9-1.5c-1.4-2.5-2.9-4.6-4.4-6.3-2.8-3.3-5.7-5-9.3-5z" fill="#0081FB" />
        <path d="M17.6 28c3.8 0 7 3.5 10.5 10l2.1 3.5L32.3 38c3.5-6.5 6.7-10 10.5-10 3 0 5.2 2.3 6.8 5.8 1.5 3.3 2.2 7.4 2.2 11.2s-.7 7.9-2.2 11.2c-1.6 3.5-3.8 5.8-6.8 5.8-3.8 0-7-3.5-10.5-10l-2.1-3.5-2.1 3.5c-3.5 6.5-6.7 10-10.5 10-3 0-5.2-2.3-6.8-5.8-1.5-3.3-2.2-7.4-2.2-11.2s.7-7.9 2.2-11.2c1.6-3.5 3.8-5.8 6.8-5.8z" fill="#fff" />
    </svg>
);

const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id={`ig-${Math.random().toString(36).slice(2, 6)}`} cx="15%" cy="105%" r="150%">
                <stop offset="0%" stopColor="#fdf497" /><stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" /><stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
        </defs>
        <rect x="1" y="1" width="46" height="46" rx="12" fill="url(#ig-grad-off)" />
        <path d="M24 14.16A9.84 9.84 0 0014.16 24 9.84 9.84 0 0024 33.84 9.84 9.84 0 0033.84 24 9.84 9.84 0 0024 14.16zm0 16.24A6.4 6.4 0 0117.6 24 6.4 6.4 0 0124 17.6 6.4 6.4 0 0130.4 24 6.4 6.4 0 0124 30.4z" fill="#fff" />
        <circle cx="34.2" cy="13.8" r="2.3" fill="#fff" />
        <rect x="1" y="1" width="46" height="46" rx="12" fill="url(#ig-grad-off)" style={{ mixBlendMode: 'multiply', opacity: 0 }} />
        <defs><radialGradient id="ig-grad-off" cx="15%" cy="105%" r="150%">
            <stop offset="0%" stopColor="#fdf497" /><stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" /><stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
        </radialGradient></defs>
    </svg>
);

const IconFacebook = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#1877F2" />
        <path d="M33 24h-5v-4c0-1.1.9-2 2-2h3v-5h-4c-3.9 0-7 3.1-7 7v4h-4v5h4v12.7c1.3.2 2.6.3 4 .3s2.7-.1 4-.3V29h3.5L33 24z" fill="#fff" />
    </svg>
);

const IconWhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#25D366" />
        <path d="M35 29.2c-.6-.3-3.5-1.7-4-1.9-.6-.2-.9-.3-1.3.3-.4.6-1.5 1.9-1.8 2.3-.3.4-.7.4-1.3.1-.6-.3-2.5-.9-4.8-2.9-1.8-1.6-3-3.5-3.3-4.1-.3-.6 0-.9.3-1.2.3-.3.6-.7.9-1 .3-.4.4-.6.6-1 .2-.4.1-.7 0-1-.2-.3-1.3-3.2-1.8-4.4-.5-1.2-1-1-1.3-1h-1.1c-.4 0-1 .2-1.6.7-.6.6-2.1 2-2.1 5s2.1 5.8 2.4 6.2c.3.4 4.2 6.4 10.2 9 1.4.6 2.5 1 3.4 1.3 1.4.4 2.7.4 3.8.2 1.2-.2 3.5-1.4 4-2.8.5-1.4.5-2.6.3-2.8-.1-.3-.5-.4-1.1-.7z" fill="#fff" />
    </svg>
);

const IconTikTok = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.37-1.19 4.74-3.1 6.13-1.63 1.21-3.76 1.66-5.74 1.34-2.19-.34-4.25-1.73-5.35-3.66-1.1-1.92-1.22-4.32-.48-6.33.68-1.86 2.18-3.37 4.09-3.95 2.13-.67 4.54-.45 6.46.6.01-.22.01-.45.01-.67v-3.7c-2.43-.63-5.11-.27-7.25 1.06-2.21 1.35-3.8 3.59-4.28 6.09-.49 2.5.06 5.17 1.6 7.18 1.43 1.88 3.72 2.94 6.06 3.07 2.41.14 4.88-.67 6.64-2.3 1.82-1.68 2.84-4.09 2.85-6.61.02-6.52.01-13.04.01-19.57L12.525.02z" fill="#010101" />
        <path d="M22.425 9.99V5.96c-1.54-.17-3.12-.68-4.24-1.79-1.12-1.08-1.67-2.64-1.75-4.17H12.525v8.71c.52.34 1.05.67 1.62.93 1.31.62 2.76.92 4.2 1.01l4.08-.66z" fill="#69C9D0" style={{ mixBlendMode: "screen" }} />
        <path d="M5.525 14.51c-1.91.58-3.41 2.09-4.09 3.95-.74 2.01-.62 4.41.48 6.33 1.1 1.93 3.16 3.32 5.35 3.66 1.98.32 4.11-.13 5.74-1.34 1.91-1.39 3.02-3.76 3.1-6.13V17c-1.92-1.05-4.33-1.27-6.46-.6l-4.12-1.89z" fill="#EE1D52" style={{ mixBlendMode: "screen" }} />
    </svg>
);

const IconMercadoLivre = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z" fill="#FFE600" />
        <path d="M15.344 14.974c.25.138.567.149.828.028.261-.12.45-.357.5-.64l1.248-7.078c.049-.281-.054-.567-.272-.756-.217-.189-.516-.239-.783-.13L7.432 9.77a.897.897 0 0 0-.583.82c0 .324.174.622.46.786l8.035 4.618v-1.02h0z" fill="#2d3277" />
        <path d="M17.42 6.398c-.267-.234-.633-.3-.974-.17L7.012 9.601C6.485 9.794 6.136 10.3 6.135 10.86c0 .408.2.787.534.997l9.167 5.783v-1.246c0-.522.28-1.002.736-1.264L18.48 13.97l.18.06-1.482 8.356c-.05.283-.242.52-.5.64s-.578.11-.828-.027l-8.034-4.606v1.178c-.29-.168-.466-.467-.466-.793a.9.9 0 0 1 .584-.823l9.444-3.376.136.046-1.503 8.52c-.104.59.186 1.185.733 1.49l8.034 4.542a1.8 1.8 0 0 0 .973.18h.01a1.802 1.802 0 0 0 .972-.18l8.035-4.542c.546-.305.836-.899.733-1.49l-1.497-8.484.157-.052 9.423 3.366a.9.9 0 0 1 .585.823c0 .326-.176.625-.467.794v-1.18L23.032 24c-.25.138-.568.148-.828.028a.897.897 0 0 1-.5-.64L20.22 15.03l.162-.054c.456.262.736.742.736 1.264v1.246l9.167-5.783c.334-.21.534-.589.534-.997 0-.56-.35-1.065-.877-1.258L20.508 6.228a1.32 1.32 0 0 0-.974.17L17.42 6.398z" fill="#FFE600" />
        <path d="M15.42 18.538c-.352.196-.757.196-1.108 0L8.277 15.92a1.5 1.5 0 0 1-.826-1.312v-.006c0-.623.38-1.173.957-1.39l7.864-2.905c1.074-.396 2.155.334 2.296 1.488l1.045 8.542a1.5 1.5 0 0 1-.689 1.43l-1.504.832v-.06zM17.5 15.064l1.378-7.798c.112-.633-.18-1.253-.728-1.542L10.286 2.685C9.942 2.49 9.545 2.49 9.2 2.685L2.036 6.706a1.492 1.492 0 0 0-.745 1.255c0 .546.335 1.05.85 1.25L11.61 12.463v-1.114a1.002 1.002 0 0 1 .584-.813L18.48 8.3l.033.056L17.5 15.064z" fill="#2d3277" />
    </svg>
);

/* ═══════════════════════════════════════════════
   FLOATING ICON — GPU-optimized, gentle motion
═══════════════════════════════════════════════ */

interface FloatingIconData {
    id: number;
    iconUrl: string;
    className: string;
    label: string;
    floatDuration: number;
}

const FloatingIcon = ({
    mouseX,
    mouseY,
    iconData,
    index,
}: {
    key?: React.Key;
    mouseX: React.MutableRefObject<number>;
    mouseY: React.MutableRefObject<number>;
    iconData: FloatingIconData;
    index: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 120, damping: 30 });
    const springY = useSpring(y, { stiffness: 120, damping: 30 });

    useEffect(() => {
        let raf: number;
        const tick = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = mouseX.current - cx;
                const dy = mouseY.current - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    const angle = Math.atan2(dy, dx);
                    const force = (1 - dist / 180) * 40;
                    x.set(-Math.cos(angle) * force);
                    y.set(-Math.sin(angle) * force);
                } else {
                    x.set(0);
                    y.set(0);
                }
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [x, y, mouseX, mouseY]);

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY, willChange: 'transform' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={cn('absolute z-0', iconData.className)}
        >
            <motion.div
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-2.5 sm:p-3 rounded-[1.25rem] bg-white/95 backdrop-blur-md border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden"
                style={{ willChange: 'transform' }}
                animate={{ y: [0, -6, 0, 6, 0] }}
                transition={{
                    duration: iconData.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                title={iconData.label}
            >
                <img
                    src={iconData.iconUrl}
                    alt={iconData.label}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain select-none pointer-events-none drop-shadow-sm"
                    draggable={false}
                />
            </motion.div>
        </motion.div>
    );
};

/* ═══════════════════════════════════════════════
   8 ICONS — no duplicates, balanced positions
═══════════════════════════════════════════════ */

const platformIcons: FloatingIconData[] = [
    { id: 1, iconUrl: '/ICONES/google-ads.svg', className: 'top-[16%] left-[15%]', label: 'Google Ads', floatDuration: 7 },
    { id: 2, iconUrl: '/ICONES/youtube-icon.svg', className: 'top-[14%] right-[16%]', label: 'YouTube', floatDuration: 8.5 },
    { id: 3, iconUrl: '/ICONES/meta-icon.svg', className: 'top-[52%] left-[12%]', label: 'Meta', floatDuration: 9 },
    { id: 4, iconUrl: '/ICONES/instagram-icon.svg', className: 'bottom-[18%] right-[15%]', label: 'Instagram', floatDuration: 7.5 },
    { id: 5, iconUrl: '/ICONES/google-adsense.svg', className: 'top-[8%] left-[38%]', label: 'Google AdSense', floatDuration: 8 },
    { id: 6, iconUrl: '/ICONES/whatsapp-icon.svg', className: 'top-[10%] right-[34%]', label: 'WhatsApp', floatDuration: 9.5 },
    { id: 7, iconUrl: '/ICONES/tiktok-icon.svg', className: 'bottom-[15%] left-[22%]', label: 'TikTok', floatDuration: 8 },
    { id: 8, iconUrl: '/ICONES/pinterest.svg', className: 'top-[50%] right-[12%]', label: 'Pinterest', floatDuration: 7 },
];

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */

const OnboardingTrafego = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };

    /* ── Data ── */
    const timelineSteps = [
        {
            etapa: '01',
            title: 'Acessos às contas',
            icon: <Key className="w-6 h-6 text-brand-green" />,
            prazo: '1 a 2 dias úteis',
            desc: 'Configuração dos acessos necessários às plataformas de anúncios.',
            details: [
                'Concessão de acesso pelo cliente; ou',
                'Envio de login para configuração pela equipe.'
            ]
        },
        {
            etapa: '02',
            title: 'Preenchimento do briefing',
            icon: <FileText className="w-6 h-6 text-brand-green" />,
            prazo: 'Até 2 dias úteis (cliente)',
            desc: 'Coleta de informações estratégicas sobre o negócio.',
            details: [
                'Objetivos comerciais',
                'Diferenciais',
                'Público-alvo',
                'Histórico de marketing',
                'Ofertas e prioridades'
            ]
        },
        {
            etapa: '03',
            title: 'Planejamento estratégico',
            icon: <BarChart3 className="w-6 h-6 text-brand-green" />,
            prazo: 'Até 7 dias úteis',
            desc: 'Desenvolvimento do plano de mídia completo.',
            details: [
                'Análise do histórico das contas (quando existente)',
                'Estudo do mercado e concorrência',
                'Definição de personas',
                'Estruturação da estratégia',
                'Planejamento de campanhas e testes'
            ]
        },
        {
            etapa: '04',
            title: 'Apresentação do planejamento',
            icon: <Target className="w-6 h-6 text-brand-green" />,
            prazo: 'Agendamento após etapa 3',
            desc: 'Reunião de alinhamento estratégico com o cliente.',
            details: [
                'Estrutura das campanhas',
                'Lógica estratégica',
                'Direcionamento inicial do investimento',
                'Próximos passos'
            ]
        },
        {
            etapa: '05',
            title: 'Configuração e ativação',
            icon: <Settings className="w-6 h-6 text-brand-green" />,
            prazo: '2 a 3 dias úteis',
            desc: 'Configuração técnica e publicação dos anúncios.',
            details: [
                'Configuração técnica das campanhas',
                'Revisão de rastreamentos',
                'Publicação dos anúncios'
            ]
        }
    ];

    const optimizationItems = [
        { title: 'Testes de novos criativos', icon: <Paintbrush className="w-6 h-6" /> },
        { title: 'Ajustes de públicos', icon: <Users className="w-6 h-6" /> },
        { title: 'Otimização de posicionamentos', icon: <Crosshair className="w-6 h-6" /> },
        { title: 'Refinamento de segmentações', icon: <Filter className="w-6 h-6" /> },
        { title: 'Negativação de palavras-chave (Google)', icon: <Ban className="w-6 h-6" /> },
        { title: 'Ajustes de mensagens e abordagens', icon: <MessageSquare className="w-6 h-6" /> },
        { title: 'Redistribuição de investimento entre campanhas', icon: <Coins className="w-6 h-6" /> },
    ];

    const expectations = [
        'Resultados consistentes são construídos com dados',
        'Oscilações iniciais são normais',
        'Otimizações acontecem de forma progressiva',
        'Performance melhora conforme o aprendizado da plataforma',
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-[#fafafa] min-h-screen text-[#111] font-sans selection:bg-brand-green/20 selection:text-brand-green overflow-x-hidden">

            {/* ═══════════════════════════════════════════════
                1. HERO — Floating Platform Icons
            ═══════════════════════════════════════════════ */}
            <section
                onMouseMove={handleMouseMove}
                className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Subtle grid */}
                <AnimatedGridPattern
                    numSquares={20}
                    maxOpacity={0.05}
                    duration={6}
                    repeatDelay={2}
                    className={cn(
                        "fill-brand-green/20 stroke-brand-green/10 text-brand-green/15",
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-10%] h-[120%] skew-y-3",
                    )}
                />

                {/* Radial glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[35rem] bg-brand-green/[0.025] rounded-full blur-[140px]" />
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 w-full h-full hidden md:block">
                    {platformIcons.map((iconData, index) => (
                        <FloatingIcon
                            key={iconData.id}
                            mouseX={mouseX}
                            mouseY={mouseY}
                            iconData={iconData}
                            index={index}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
                    {/* Mobile Logo Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full overflow-hidden mb-6 md:hidden flex items-center justify-center [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                    >
                        <div className="flex shrink-0 w-max whitespace-nowrap animate-marquee">
                            {[...platformIcons, ...platformIcons].map((icon, i) => (
                                <div key={i} className="flex items-center justify-center w-12 h-12 mx-3 rounded-[0.85rem] bg-white/95 backdrop-blur-sm border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] shrink-0 self-center">
                                    <img src={icon.iconUrl} alt={icon.label} className="w-7 h-7 object-contain select-none pointer-events-none drop-shadow-sm" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-brand-green/20 bg-brand-green/5 backdrop-blur-sm mb-10 md:mb-12"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest text-brand-green uppercase">Gestão de Tráfego Pago</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-[3.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-[-0.04em] mb-8 md:mb-10 leading-[1.02] text-[#111]"
                    >
                        Onboarding<br className="sm:hidden" />{' '}
                        <span className="whitespace-nowrap font-semibold bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent">
                            Tráfego Pago
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-[17px] sm:text-lg md:text-xl text-[#666] max-w-[340px] sm:max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-[1.4] md:leading-relaxed"
                    >
                        Como funciona o início do trabalho com tráfego pago, os prazos envolvidos e o que esperar das primeiras semanas de campanha.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                    >
                        <a
                            href="#como-funciona"
                            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-green text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(12,119,78,0.25)]"
                        >
                            <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10 text-lg">Entenda o processo</span>
                            <ArrowDown className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-y-1" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                2. COMO FUNCIONA — Machine Learning
            ═══════════════════════════════════════════════ */}
            <section id="como-funciona" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-black/[0.06]">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                                <Cpu className="w-5 h-5 text-brand-green" />
                            </div>
                            <span className="text-brand-green font-medium tracking-widest uppercase text-sm">Aprendizado de Máquina</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-[#111]">
                            Como funciona o início{' '}
                            <span className="bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent italic font-light">
                                das campanhas
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-[#666] font-light leading-relaxed max-w-3xl mx-auto">
                            As plataformas de mídia trabalham com aprendizado de máquina, ou seja, precisam de um período inicial para entender o público ideal e otimizar a entrega dos anúncios.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Meta Ads Card */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="group bg-[#fafafa] border border-black/[0.08] rounded-2xl p-7 md:p-9 transition-all duration-500 hover:border-brand-green/30 hover:shadow-[0_8px_30px_rgba(12,119,78,0.08)] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-green/5 border border-brand-green/15 flex items-center justify-center shadow-sm">
                                        <Share2 className="w-7 h-7 text-brand-green" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#111]">Meta Ads</h3>
                                        <span className="text-sm text-[#999]">Instagram e Facebook</span>
                                    </div>
                                </div>
                                <p className="text-[#555] text-base md:text-lg leading-relaxed font-light mb-6">
                                    Após a ativação das campanhas, existe um período médio de até{' '}
                                    <strong className="text-brand-green font-semibold">7 dias</strong> de aprendizado.
                                </p>
                                <p className="text-[#777] text-sm font-light mb-4">Durante essa fase, a plataforma:</p>
                                <ul className="space-y-3 mb-6">
                                    {['Testa diferentes perfis de usuários', 'Avalia comportamentos e interações', 'Identifica padrões de conversão'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#444] text-sm md:text-base">
                                            <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-green/[0.04] border border-brand-green/15">
                                    <AlertCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                    <p className="text-sm text-[#555] font-light">
                                        É esperado que ocorram <strong className="text-[#222] font-medium">oscilações de resultados</strong> nesse período.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Google Ads Card */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="group bg-[#fafafa] border border-black/[0.08] rounded-2xl p-7 md:p-9 transition-all duration-500 hover:border-brand-green/30 hover:shadow-[0_8px_30px_rgba(12,119,78,0.08)] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green/10 to-brand-green/5 border border-brand-green/15 flex items-center justify-center shadow-sm">
                                        <Search className="w-7 h-7 text-brand-green" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#111]">Google Ads</h3>
                                        <span className="text-sm text-[#999]">Search, Display & YouTube</span>
                                    </div>
                                </div>
                                <p className="text-[#555] text-base md:text-lg leading-relaxed font-light mb-6">
                                    No Google, o processo de estabilização tende a ser mais longo, podendo chegar a até{' '}
                                    <strong className="text-brand-green font-semibold">30 dias</strong>, dependendo do volume de dados.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Investimento gradual', text: 'Nos primeiros dias, o investimento pode não ser gasto integralmente.' },
                                        { label: 'Entrega progressiva', text: 'A entrega acontece de forma gradual.' },
                                        { label: 'Aprendizado primeiro', text: 'O sistema prioriza aprendizado antes da escala. Com o acúmulo de dados, a distribuição do orçamento se estabiliza naturalmente.' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Zap className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-[#222] font-semibold text-sm">{item.label}: </span>
                                                <span className="text-[#666] text-sm font-light">{item.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                3. TIMELINE — ETAPAS DO ONBOARDING
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                <AnimatedGridPattern
                    numSquares={20}
                    maxOpacity={0.04}
                    duration={5}
                    repeatDelay={2}
                    className={cn(
                        "fill-brand-green/20 stroke-black/[0.04] text-brand-green/15",
                        "[mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
                    )}
                />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/[0.08] pb-10"
                    >
                        <div className="max-w-2xl">
                            <div className="text-brand-green font-medium tracking-widest uppercase text-sm mb-4">Passo a Passo</div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111]">
                                Etapas do <span className="font-light italic bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent">onboarding</span>
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl text-[#666] font-light max-w-md">
                            Cada etapa foi pensada para garantir que todas as campanhas sejam construídas com base em dados e estratégia.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-8 md:gap-10 relative max-w-5xl mx-auto">
                        <div className="absolute left-[39px] md:left-[55px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-brand-green/30 to-transparent z-0" />
                        {timelineSteps.map((step, index) => (
                            <motion.div
                                key={step.etapa}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, delay: index * 0.08 }}
                                className="relative z-10 flex flex-col md:flex-row items-start gap-5 md:gap-10 group"
                            >
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-2 border-black/[0.08] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-brand-green group-hover:shadow-[0_0_30px_rgba(12,119,78,0.1)] shadow-sm">
                                    <span className="text-2xl md:text-4xl font-light text-[#ccc] group-hover:text-brand-green transition-colors duration-500">{step.etapa}</span>
                                </div>
                                <div className="flex-1 bg-white border border-black/[0.06] p-6 md:p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-brand-green/20">
                                    <div className="flex items-center gap-3 mb-2">
                                        {step.icon}
                                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#111]">{step.title}</h3>
                                    </div>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-green/[0.06] border border-brand-green/15 mb-4 mt-1">
                                        <Clock className="w-3.5 h-3.5 text-brand-green mr-2" />
                                        <span className="text-xs text-brand-green font-medium">{step.prazo}</span>
                                    </div>
                                    <p className="text-[#555] text-base md:text-lg leading-relaxed font-light mb-4">{step.desc}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-[#666] text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-green/50 mt-2 shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                4. PERÍODO MÍNIMO DE VEICULAÇÃO
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-white border-y border-black/[0.06]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/[0.06] border border-brand-green/15 mb-8">
                            <Clock className="w-10 h-10 text-brand-green" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-[#111]">
                            Período mínimo de{' '}
                            <span className="bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent italic font-light">
                                veiculação inicial
                            </span>
                        </h2>
                        <div className="relative max-w-2xl mx-auto">
                            <div className="bg-[#fafafa] border border-black/[0.08] rounded-2xl p-8 md:p-12">
                                <p className="text-lg md:text-xl text-[#555] font-light leading-relaxed mb-6">
                                    Recomendamos manter a estrutura inicial ativa por pelo menos{' '}
                                    <strong className="text-brand-green font-bold text-3xl">7 dias</strong>.
                                </p>
                                <p className="text-[#888] text-base font-light leading-relaxed">
                                    Esse é o tempo mínimo para a plataforma coletar dados suficientes para avaliação de performance. Investimentos mais altos podem permitir otimizações antecipadas.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                5. PROCESSO CONTÍNUO DE OTIMIZAÇÃO — Grid
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-14 md:mb-18"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-[#111]">
                            Processo contínuo de{' '}
                            <span className="bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent italic font-light">
                                otimização
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-[#666] font-light max-w-2xl mx-auto">
                            Após o período inicial, as campanhas entram em um ciclo contínuo de melhorias que inclui:
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {optimizationItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group relative bg-white border border-black/[0.06] p-5 md:p-6 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-[0_8px_25px_rgba(12,119,78,0.08)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-11 h-11 rounded-lg bg-brand-green/[0.06] border border-brand-green/10 flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold tracking-tight leading-snug text-[#222]">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                6. O QUE ESPERAR NAS PRIMEIRAS SEMANAS
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-white border-t border-black/[0.06]">
                <AnimatedGridPattern
                    numSquares={25}
                    maxOpacity={0.05}
                    duration={4}
                    repeatDelay={1.5}
                    className={cn(
                        "fill-brand-green/20 stroke-brand-green/10 text-brand-green/20",
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                    )}
                />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green/[0.06] border border-brand-green/15 mb-6">
                            <TrendingUp className="w-7 h-7 text-brand-green" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-[#111]">
                            O que esperar nas{' '}
                            <span className="bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent italic font-light">
                                primeiras semanas
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#fafafa] border border-black/[0.08] rounded-2xl p-8 md:p-12 mb-14"
                    >
                        <div className="space-y-5">
                            {expectations.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                                    <span className="text-base md:text-lg text-[#444] font-light">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-center"
                    >
                        <div className="relative inline-block">
                            <div className="absolute -top-6 -left-4 text-brand-green/10 text-7xl font-serif leading-none select-none">"</div>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug relative z-10 max-w-3xl text-[#222]">
                                Tráfego pago é um processo contínuo de{' '}
                                <span className="bg-gradient-to-r from-brand-green to-[#34d399] bg-clip-text text-transparent italic font-light">
                                    análise, teste e evolução.
                                </span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center mt-14"
                    >
                        <a
                            href="https://api.whatsapp.com/send?phone=5511948635387&text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20onboarding%20de%20tr%C3%A1fego!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-green text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(12,119,78,0.3)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10 text-lg">Fale com a equipe</span>
                            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default OnboardingTrafego;
