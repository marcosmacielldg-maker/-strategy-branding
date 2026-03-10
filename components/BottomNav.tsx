
import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, Compass, MessageCircle, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('home');

    // Check if we are on a specialized page
    const isSpecializedPage = location.pathname !== '/';

    // Initial check for hash
    useEffect(() => {
        if (location.pathname === '/diagnostico') {
            setActiveTab('diagnosis');
        } else if (location.hash) {
            setActiveTab(location.hash);
        } else {
            setActiveTab('home');
        }
    }, [location]);

    const handleNavigation = (id: string, path: string = '/') => {
        setActiveTab(id);
        if (location.pathname !== '/') {
            navigate(path);
            setTimeout(() => {
                if (id === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (id === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div
            className={`
                fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden
                transition-all duration-300 ease-in-out
            `}
        >
            <div className="flex items-center gap-8 px-8 py-4 rounded-full bg-brand-black/90 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40">
                {isSpecializedPage ? (
                    <>
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center transition-all duration-300 text-white/50 hover:text-white"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => {
                                navigate('/');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`flex items-center justify-center transition-all duration-300 ${activeTab === 'home' || activeTab === '#' ? 'text-brand-green scale-110' : 'text-white/50 hover:text-white'}`}
                        >
                            <Home className="w-6 h-6" />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => handleNavigation('#')}
                            className={`flex items-center justify-center transition-all duration-300 ${activeTab === 'home' || activeTab === '#' ? 'text-brand-green scale-110' : 'text-white/50 hover:text-white'}`}
                        >
                            <Home className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => handleNavigation('#solucoes')}
                            className={`flex items-center justify-center transition-all duration-300 ${activeTab === '#solucoes' ? 'text-brand-green scale-110' : 'text-white/50 hover:text-white'}`}
                        >
                            <LayoutGrid className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => handleNavigation('#metodologia')}
                            className={`flex items-center justify-center transition-all duration-300 ${activeTab === '#metodologia' ? 'text-brand-green scale-110' : 'text-white/50 hover:text-white'}`}
                        >
                            <Compass className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => handleNavigation('#contato')}
                            className={`flex items-center justify-center transition-all duration-300 ${activeTab === '#contato' ? 'text-brand-green scale-110' : 'text-white/50 hover:text-white'}`}
                        >
                            <MessageCircle className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default BottomNav;
