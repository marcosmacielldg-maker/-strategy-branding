import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0e2116] rounded-t-[4rem] px-6 py-20 md:px-12 lg:px-24 relative z-20 mt-[-2rem] border-t border-[#45f2a1]/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                <div>
                    <div className="mb-6">
                        <img src="/logo-eixo-claro.svg" alt="Sistema EIXO Oficial" className="h-8 md:h-10 w-auto" />
                    </div>
                    <p className="text-white/60 font-sans max-w-sm mb-12">
                        A espinha dorsal comercial da sua empresa. Elimine o amadorismo visual e atraia vendas premium.
                    </p>

                    <div className="flex items-center gap-3 bg-[#1a3a2b] px-4 py-2 rounded-full border border-white/5 w-fit">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#45f2a1] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#45f2a1]"></span>
                        </span>
                        <span className="font-mono text-xs text-[#45f2a1] uppercase tracking-wider font-semibold">
                            Sistema Operacional: Online
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h4 className="text-white font-sans font-bold mb-6">Navegação</h4>
                        <ul className="space-y-4">
                            <li><a href="#features" className="text-white/50 hover:text-[#45f2a1] font-sans text-sm transition-colors">Proposta</a></li>
                            <li><a href="#protocol" className="text-white/50 hover:text-[#45f2a1] font-sans text-sm transition-colors">Método Eixo</a></li>
                            <li><a href="#pricing" className="text-white/50 hover:text-[#45f2a1] font-sans text-sm transition-colors">Investimento</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-sans font-bold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li><a href="mailto:ola@marcosmacielldg.com.br" className="text-white/50 hover:text-[#45f2a1] font-sans text-sm transition-colors">ola@marcosmacielldg.com.br</a></li>
                            <li><a href="https://wa.me/5511948635387" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#45f2a1] font-sans text-sm transition-colors">WhatsApp</a></li>
                            <li className="text-white/50 font-sans text-sm">São Paulo – SP</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-white/30 font-sans text-xs">
                <p>© {new Date().getFullYear()} Marcos Maciel Studio. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Projetado para conversão & ticket premium.</p>
            </div>
        </footer>
    );
};

export default Footer;
