import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';

interface LeadCaptureProps {
    onSubmit: (name: string, email: string, phone: string) => Promise<void>;
    loading: boolean;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ onSubmit, loading }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && phone) {
            if (window.dataLayer) {
                window.dataLayer.push({ event: 'gerou_lead', origin: 'diagnosis_form' });
            }
            if (window.fbq) {
                window.fbq('track', 'Lead', { content_name: 'diagnosis_form' });
            }
            onSubmit(name, email, phone);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-200/50"
            >
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-3xl">
                        🏔️
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Quase lá...
                </h2>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    Preencha seus dados para receber o diagnóstico completo da sua marca e descobrir os próximos passos da sua escalada.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Seu Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/50 focus:bg-white transition-all"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Seu Melhor E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/50 focus:bg-white transition-all"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Seu WhatsApp"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/50 focus:bg-white transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-green text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-brand-green/20"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                                Revelar Meu Diagnóstico
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default LeadCapture;
