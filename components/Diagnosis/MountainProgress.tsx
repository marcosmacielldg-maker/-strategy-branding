import React from 'react';
import { motion } from 'framer-motion';

interface MountainProgressProps {
    currentStep: number;
    totalSteps: number;
}

const MountainProgress: React.FC<MountainProgressProps> = ({ currentStep, totalSteps }) => {
    const progress = ((currentStep - 1) / totalSteps) * 100;

    return (
        <div className="w-full max-w-xl mx-auto mb-8 px-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2 font-mono">
                <span>Base</span>
                <span>Cume</span>
            </div>
            <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-green/50 to-brand-green"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {/* Mountain Icons along the path */}
                {Array.from({ length: totalSteps }).map((_, idx) => {
                    const stepPos = (idx / totalSteps) * 100;
                    return (
                        <div
                            key={idx}
                            className={`absolute top-0 w-0.5 h-full bg-black/20 z-10`}
                            style={{ left: `${stepPos}%` }}
                        />
                    )
                })}
            </div>
            <div className="mt-2 text-center text-brand-green font-bold">
                Passo {currentStep} de {totalSteps}
            </div>
        </div>
    );
};

export default MountainProgress;
