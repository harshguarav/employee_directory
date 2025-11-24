import React from 'react';

const EmployeeCard = ({ employee, onEdit, onDelete, viewMode = 'grid' }) => {
    if (viewMode === 'list') {
        return (
            <div className="glass-card rounded-xl p-4 flex flex-col sm:flex-row items-center gap-6 group">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <img
                        className="relative h-16 w-16 rounded-full object-cover border-2 border-white dark:border-gray-700"
                        src={employee.image}
                        alt={employee.name}
                    />
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-text-primary dark:text-white">{employee.name}</h3>
                    <p className="text-brand-secondary dark:text-blue-400 font-medium text-sm">{employee.role}</p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-sm text-text-secondary dark:text-gray-400">
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-state-success"></span>
                            {employee.department}
                        </span>
                        <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
                        <span>{employee.email}</span>
                        <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
                        <span>{employee.phone}</span>
                    </div>
                </div>

                <div className="flex gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                        onClick={() => onEdit(employee.id)}
                        className="p-2 text-brand-primary dark:text-green-400 hover:bg-brand-primary/10 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                        title="Edit"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                    <button
                        onClick={() => onDelete(employee.id)}
                        className="p-2 text-state-error dark:text-red-400 hover:bg-state-error/10 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                        title="Delete"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-2xl overflow-hidden group relative">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 dark:from-blue-600/20 dark:to-indigo-600/20"></div>
            <div className="p-6 flex flex-col items-center text-center relative">
                <div className="relative mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <img
                        className="relative h-28 w-28 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
                        src={employee.image}
                        alt={employee.name}
                    />
                </div>

                <h3 className="text-xl font-bold text-text-primary dark:text-white mb-1">{employee.name}</h3>
                <p className="text-sm font-medium text-brand-secondary dark:text-blue-400 mb-3">{employee.role}</p>
                <span className="px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6 border border-emerald-200 dark:border-emerald-800">
                    {employee.department}
                </span>

                <div className="w-full space-y-3 text-sm text-text-secondary dark:text-gray-300 mb-6">
                    <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-neutral-light dark:bg-gray-700/50">
                        <span>📧</span>
                        <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-neutral-light dark:bg-gray-700/50">
                        <span>📞</span>
                        <span>{employee.phone}</span>
                    </div>
                </div>

                <div className="flex gap-3 w-full mt-auto">
                    <button
                        onClick={() => onEdit(employee.id)}
                        className="flex-1 btn-primary"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(employee.id)}
                        className="flex-1 btn-danger"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
