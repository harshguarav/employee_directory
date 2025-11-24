import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Edit2, Trash2 } from 'lucide-react';
import ConfirmModal from './ConfirmModal';

const EmployeeList = ({ employees, onEdit, onDelete, onStatusChange, viewMode }) => {
    const [deleteId, setDeleteId] = useState(null);

    const handleDeleteClick = (id) => {
        setDeleteId(id);
    };

    const handleConfirmDelete = () => {
        if (deleteId) {
            onDelete(deleteId);
            setDeleteId(null);
        }
    };

    if (employees.length === 0) {
        return (
            <div className="text-center py-12 bg-white dark:bg-bg-off-black rounded-2xl border border-black/5 dark:border-white/5">
                <p className="text-text-secondary text-lg">No members found.</p>
            </div>
        );
    }

    return (
        <>
            {viewMode === 'list' ? (
                <div className="bg-white dark:bg-bg-off-black rounded-2xl shadow-sm overflow-hidden border border-black/5 dark:border-white/5">
                    <table className="w-full text-left">
                        <thead className="bg-bg-light dark:bg-black border-b border-black/5 dark:border-white/5">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Department</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Role</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5 dark:divide-white/5">
                            {employees.map((employee, index) => (
                                <motion.tr
                                    key={employee.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-bg-light dark:hover:bg-black/50 transition-colors group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={employee.image} alt="" className="w-10 h-10 rounded-full object-cover border border-black/5 dark:border-white/5" />
                                            <span className="font-medium text-text-primary-dark dark:text-text-primary-light">{employee.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">{employee.phone}</td>
                                    <td className="px-6 py-4 text-text-secondary">{employee.department}</td>
                                    <td className="px-6 py-4 text-text-secondary">{employee.role}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => onStatusChange(employee.id, employee.active)}
                                            className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${employee.active
                                                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                                                }`}
                                        >
                                            {employee.active ? "Active" : "Inactive"}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => onEdit(employee.id)}
                                                className="p-2 text-text-secondary hover:text-text-primary-dark dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(employee.id)}
                                                className="p-2 text-text-secondary hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {employees.map((employee, index) => (
                        <motion.div
                            key={employee.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white dark:bg-bg-off-black p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                                    <img src={employee.image} alt="" className="w-20 h-20 rounded-full object-cover border-2 border-white dark:border-bg-off-black relative z-10" />
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onStatusChange(employee.id, employee.active);
                                        }}
                                        className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-white dark:border-bg-off-black flex items-center justify-center z-20 cursor-pointer transition-colors ${employee.active ? "bg-green-500" : "bg-gray-400"
                                            }`}
                                        title={employee.active ? "Active" : "Inactive"}
                                    />
                                </div>
                                <h3 className="font-medium text-lg text-text-primary-dark dark:text-text-primary-light mb-1">{employee.name}</h3>
                                <p className="text-text-secondary text-sm mb-4">{employee.role}</p>

                                <div className="flex items-center gap-2 w-full mt-2">
                                    <button
                                        onClick={() => onEdit(employee.id)}
                                        className="flex-1 py-2 text-sm font-medium rounded-lg bg-bg-light dark:bg-white/5 text-text-primary-dark dark:text-text-primary-light hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(employee.id)}
                                        className="p-2 rounded-lg bg-bg-light dark:bg-white/5 text-text-secondary hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            <ConfirmModal
                isOpen={!!deleteId}
                onClose={() => setDeleteId(null)}
                onConfirm={handleConfirmDelete}
                title="Delete Member"
                message="Are you sure you want to delete this member? This action cannot be undone."
            />
        </>
    );
};

export default EmployeeList;
