import React from 'react';
import { motion } from "motion/react";
import { X } from 'lucide-react';
import CustomSelect from './CustomSelect';

const EmployeeForm = ({ initialData, onSubmit, onCancel, departments }) => {
    const [image, setImage] = React.useState('');
    const [formData, setFormData] = React.useState({
        name: '',
        role: '',
        department: '',
        phone: '',
        email: '',
        image: image,
        ...initialData
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setImage(`https://api.dicebear.com/7.x/avataaars/svg?seed=${value}`);
    };

    const handleSelectChange = (value) => {
        setFormData(prev => ({ ...prev, department: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 dark:bg-black/50 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-bg-off-black w-full max-w-lg rounded-2xl shadow-xl border border-black/5 dark:border-white/5 overflow-hidden relative z-[101]"
            >
                <div className="p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
                    <h2 className="text-xl font-serif text-text-primary-dark dark:text-text-primary-light">
                        {initialData ? 'Edit Member' : 'Add New Member'}
                    </h2>
                    <button onClick={onCancel} className="text-text-secondary hover:text-text-primary-dark dark:hover:text-white transition-colors cursor-pointer">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-bg-light dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 focus:ring-0 text-text-primary-dark dark:text-text-primary-light transition-all focus:outline-none"
                            placeholder="e.g. Harsh kumar jha"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Role</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg bg-bg-light dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 focus:ring-0 text-text-primary-dark dark:text-text-primary-light transition-all focus:outline-none"
                                placeholder="e.g. Designer"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Department</label>
                            <CustomSelect
                                value={formData.department}
                                onChange={handleSelectChange}
                                options={departments}
                                placeholder="Select..."
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-bg-light dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 focus:ring-0 text-text-primary-dark dark:text-text-primary-light transition-all focus:outline-none"
                            placeholder="harsh@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-bg-light dark:bg-white/5 border border-transparent focus:border-black/10 dark:focus:border-white/10 focus:ring-0 text-text-primary-dark dark:text-text-primary-light transition-all focus:outline-none"
                            placeholder="+91 0000000000"
                        />
                    </div>

                    <div className="pt-4 flex gap-3 justify-end">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 rounded-lg text-text-secondary hover:bg-bg-light dark:hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            {initialData ? 'Save Changes' : 'Create Member'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default EmployeeForm;
