import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Plus } from 'lucide-react';
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { AppSidebar } from "../components/AppSidebar"
import EmployeeList from '../components/EmployeeList';
import SearchBar from '../components/SearchBar';
import EmployeeForm from '../components/EmployeeForm';
import StatsCard from '../components/StatsCard';
import { AnimatedThemeToggler } from '../components/AnimatedThemeToggler';
import { employeeService } from '../services/employeeService';
import { Toaster } from "../components/ui/sonner"
import { toast } from "sonner"

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDepartment, setFilterDepartment] = useState('');
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [viewMode, setViewMode] = useState('list');

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const data = await employeeService.getAll();
            setEmployees(data);
        } catch (error) {
            console.error("Failed to load employees", error);
            toast.error("Failed to load employees");
        }
    };

    const handleSearch = (term) => setSearchTerm(term);
    const handleFilter = (department) => {
        setFilterDepartment(department === "All Departments" ? "" : department);
    };

    const handleAddEmployee = async (employee) => {
        try {
            await employeeService.create(employee);
            loadEmployees();
            setIsFormOpen(false);
            toast.success("Member added successfully");
        } catch (error) {
            console.error("Failed to add employee", error);
            toast.error("Failed to add member");
        }
    };

    const handleUpdateEmployee = async (employee) => {
        try {
            await employeeService.update(employee.id, employee);
            loadEmployees();
            setEditingEmployee(null);
            setIsFormOpen(false);
            toast.success("Member updated successfully");
        } catch (error) {
            console.error("Failed to update employee", error);
            toast.error("Failed to update member");
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await employeeService.delete(id);
            loadEmployees();
            toast.success("Member deleted successfully");
        } catch (error) {
            console.error("Failed to delete employee", error);
            toast.error("Failed to delete member");
        }
    };

    const handleEditClick = (id) => {
        const employee = employees.find(e => e.id === id);
        setEditingEmployee(employee);
        setIsFormOpen(true);
    };

    const handleStatusChange = async (id, currentStatus) => {
        try {
            await employeeService.update(id, { active: !currentStatus });
            loadEmployees();
            toast.success(`Member marked as ${!currentStatus ? 'active' : 'inactive'}`);
        } catch (error) {
            console.error("Failed to update status", error);
            toast.error("Failed to update status");
        }
    };

    const filteredEmployees = employees.filter(employee =>
        (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterDepartment ? employee.department === filterDepartment : true)
    );

    const departments = [...new Set(["Marketing", "Management", "Engineering", ...employees.map(e => e.department)])];

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-bg-light dark:bg-bg-black transition-colors duration-500">
                <AppSidebar />

                <main className="flex-1 transition-all duration-300 w-full">
                    <div className="p-4 border-b border-black/5 dark:border-white/5 flex items-center gap-4">
                        <SidebarTrigger className={"cursor-pointer"} />
                        <div className="ml-auto flex items-center gap-4">
                            <AnimatedThemeToggler className={"cursor-pointer"} />
                        </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <header className="flex justify-between items-end mb-12">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="font-serif text-4xl md:text-5xl text-text-primary-dark dark:text-text-primary-light mb-2">
                                    Team
                                </h1>
                                <p className="font-sans text-text-secondary text-lg">
                                    Manage your organization's talent pool.
                                </p>
                            </motion.div>

                            <div className="flex items-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => { setEditingEmployee(null); setIsFormOpen(true); }}
                                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                                >
                                    <Plus className="w-5 h-5" />
                                    <span>Add Member</span>
                                </motion.button>
                            </div>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <StatsCard
                                title="Total Members"
                                value={employees.length}
                                icon="👥"
                                color="mint"
                            />
                            <StatsCard
                                title="Active Now"
                                value={employees.filter(e => e.active).length}
                                icon="🟢"
                                color="white"
                            />
                        </div>

                        <SearchBar
                            searchTerm={searchTerm}
                            onSearchChange={handleSearch}
                            filterDepartment={filterDepartment}
                            onFilterChange={handleFilter}
                            departments={departments}
                        />

                        <EmployeeList
                            employees={filteredEmployees}
                            onEdit={handleEditClick}
                            onDelete={handleDeleteEmployee}
                            onStatusChange={handleStatusChange}
                            viewMode={viewMode}
                        />

                        <AnimatePresence>
                            {isFormOpen && (
                                <EmployeeForm
                                    initialData={editingEmployee}
                                    onSubmit={editingEmployee ? handleUpdateEmployee : handleAddEmployee}
                                    onCancel={() => { setIsFormOpen(false); setEditingEmployee(null); }}
                                    departments={departments}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </main>
                <Toaster />
            </div>
        </SidebarProvider>
    );
};

export default Home;
