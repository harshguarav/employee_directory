import React from 'react';
import { motion } from "motion/react";

const StatsCard = ({ title, value, icon, color }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-bg-off-black p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-text-secondary text-sm font-medium mb-1">{title}</p>
                    <h3 className="text-3xl font-serif text-text-primary-dark dark:text-text-primary-light">{value}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-bg-light dark:bg-white/5 flex items-center justify-center text-xl">
                    {icon}
                </div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
