import React from 'react';
import { motion } from 'framer-motion';
import { Question } from './questions';

interface QuestionCardProps {
    question: Question;
    onSelect: (optionId: 'A' | 'B' | 'C') => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSelect }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <motion.h2
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl font-extrabold text-black mb-10 text-center leading-tight tracking-tight relative z-20"
            >
                <span className="relative z-10">{question.text}</span>
                <span className="absolute -top-6 -left-6 text-[8rem] font-serif text-gray-200/50 -z-0 pointer-events-none select-none">
                    {question.id}
                </span>
            </motion.h2>

            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <motion.button
                        key={option.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onSelect(option.id)}
                        className="w-full text-left p-6 md:p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-brand-green hover:bg-slate-50 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-brand-green/10"
                    >
                        <div className="flex items-start gap-6">
                            <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 text-slate-700 text-lg font-mono font-bold group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:shadow-brand-green/30">
                                {option.id}
                            </span>
                            <span className="text-gray-800 text-lg md:text-xl font-bold group-hover:text-black transition-colors leading-normal">
                                {option.text}
                            </span>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
