import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import CustomSelect from './CustomSelect';

const TypewriterPlaceholder = ({ texts }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 30 : subIndex === texts[index].length ? 1000 : 50, parseInt(Math.random() * 100)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts]);

    return (
        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
            {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </span>
    );
};

const SearchBar = ({ searchTerm, onSearchChange, filterDepartment, onFilterChange, departments }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between bg-white dark:bg-bg-off-black p-4 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
            <div className="relative flex-1 w-full md:w-auto group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
                {!searchTerm && (
                    <TypewriterPlaceholder texts={["Search members...", "Find by role...", "Type a name..."]} />
                )}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:ring-0 text-text-primary-dark dark:text-text-primary-light focus:outline-none relative z-10"
                />
            </div>
            <div className="flex items-center gap-2 border-l border-black/5 dark:border-white/5 pl-4 w-full md:w-64">
                <Filter className="w-4 h-4 text-text-tertiary" />
                <div className="flex-1">
                    <CustomSelect
                        value={filterDepartment}
                        onChange={onFilterChange}
                        options={["All Departments", ...departments]}
                        placeholder="All Departments"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
