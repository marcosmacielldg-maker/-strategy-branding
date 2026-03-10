import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Hero from './Hero';
import Dor from './Dor';
import Solucao from './Solucao';
import Metodo from './Metodo';
import Entregaveis from './Entregaveis';
import Depoimentos from './Depoimentos';
import Preco from './Preco';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const SistemaEixo: React.FC = () => {
    // Global noise overlay for organic tech/corporate precision feel
    useEffect(() => {
        document.title = "Sistema EIXO™ | A espinha dorsal comercial da sua empresa";
    }, []);

    return (
        <div className="bg-[#fafafa] text-[#111] font-sans min-h-screen relative overflow-x-hidden selection:bg-[#45f2a1] selection:text-[#234d3a]">
            <Navbar />
            <Hero />
            <Dor />
            <Solucao />
            <Metodo />
            <Entregaveis />
            <Depoimentos />
            <Preco />
            <FinalCTA />
            <Footer />
        </div>
    );
};

export default SistemaEixo;
