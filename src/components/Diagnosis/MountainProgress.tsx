import React from 'react';
import { motion } from 'framer-motion';

interface MountainProgressProps {
    currentStep: number;
    totalSteps: number;
}

const MountainProgress: React.FC<MountainProgressProps> = ({ currentStep, totalSteps }) => {
    const progress = ((currentStep - 1) / totalSteps) * 100;

    return (
        <div className="w-full max-w-xl mx-auto mb-14 px-4 relative z-20">
            <div className="flex justify-between text-xs text-slate-400 mb-6 font-bold uppercase tracking-widest px-1">
                <span>Base</span>
                <span>Cume</span>
            </div>

            {/* Track container */}
            <div className="relative h-2 w-full">
                {/* Trail Line (Background) */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-slate-200 rounded-full" />

                {/* Active Progress Line */}
                <motion.div
                    className="absolute top-1/2 left-0 h-[4px] -translate-y-1/2 bg-gradient-to-r from-teal-400 to-brand-green rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Climbing Character/Icon */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 z-10"
                    initial={{ left: 0 }}
                    animate={{ left: `${progress}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="relative -top-6 -translate-x-1/2">
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.5, repeat: 1, ease: "easeInOut" }}
                            className="text-2xl bg-white rounded-full p-1 shadow-md border border-gray-100"
                        >
                            🧗
                        </motion.div>
                        {/* Tooltip with step */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap">
                            <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                                {currentStep}/{totalSteps}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Checkpoints */}
                {Array.from({ length: totalSteps + 1 }).map((_, idx) => {
                    const stepPos = (idx / totalSteps) * 100;
                    const isCompleted = idx < currentStep;

                    if (idx === 0 || idx === totalSteps) {
                        return (
                            <div
                                key={idx}
                                className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 z-0 bg-white
                            ${isCompleted ? 'border-brand-green' : 'border-slate-300'}
                        `}
                                style={{ left: `${stepPos}%`, transform: 'translate(-50%, -50%)' }}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default MountainProgress;
