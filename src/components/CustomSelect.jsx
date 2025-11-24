import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../lib/utils';

const CustomSelect = ({ value, onChange, options, placeholder = "Select...", className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative", className)}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2.5 rounded-lg bg-bg-light dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 text-left flex items-center justify-between text-text-primary-dark dark:text-text-primary-light transition-all cursor-pointer"
            >
                <span className={!value ? "text-text-tertiary" : ""}>
                    {value || placeholder}
                </span>
                <ChevronDown className={cn("w-4 h-4 text-text-tertiary transition-transform", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white dark:bg-bg-off-black rounded-lg shadow-xl border border-black/5 dark:border-white/5 overflow-hidden"
                    >
                        <div className="max-h-60 overflow-y-auto py-1">
                            {options.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className="w-full px-4 py-2 text-left hover:bg-bg-light dark:hover:bg-white/5 flex items-center justify-between group transition-colors"
                                >
                                    <span className={cn(
                                        "text-sm",
                                        value === option ? "text-text-primary-dark dark:text-text-primary-light font-medium" : "text-text-secondary"
                                    )}>
                                        {option}
                                    </span>
                                    {value === option && (
                                        <Check className="w-4 h-4 text-black dark:text-white" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default CustomSelect;
