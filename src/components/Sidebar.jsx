import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "motion/react";
import { LayoutDashboard, Users, Calendar, Settings, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        // { icon: Users, label: 'Employees', path: '/employees' },
        // { icon: Calendar, label: 'Calendar', path: '/calendar' },
        // { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h-screen w-20 md:w-64 bg-bg-light dark:bg-bg-black border-r border-black/5 dark:border-white/5 flex flex-col fixed left-0 top-0 z-50 transition-colors duration-300"
        >
            <div className="p-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <span className="text-white dark:text-black font-serif font-bold text-lg">P</span>
                </div>
                <span className="hidden md:block font-serif text-xl font-medium tracking-tight">Penthara</span>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-8">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                            isActive(item.path)
                                ? "text-text-primary-dark dark:text-text-primary-light"
                                : "text-text-secondary hover:text-text-primary-dark dark:hover:text-text-primary-light"
                        )}
                    >
                        {isActive(item.path) && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-lg"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <item.icon className="w-5 h-5 relative z-10" />
                        <span className="hidden md:block font-medium relative z-10">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-black/5 dark:border-white/5">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-text-secondary hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="hidden md:block font-medium">Logout</span>
                </button>
            </div>
        </motion.div>
    );
};

export default Sidebar;
