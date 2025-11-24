import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import {ThemeToggleButton} from '../components/ThemeToggle';
import { employeeService } from '../services/employeeService';

const EmployeeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(!!id);

    useEffect(() => {
        if (id) {
            loadEmployee(id);
        }
    }, [id]);

    const loadEmployee = async (empId) => {
        try {
            const data = await employeeService.getById(empId);
            setEmployee(data);
        } catch (error) {
            console.error("Failed to load employee", error);
            navigate('/');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            if (id) {
                await employeeService.update(id, formData);
            } else {
                await employeeService.create(formData);
            }
            navigate('/');
        } catch (error) {
            console.error("Failed to save employee", error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="mb-6 flex justify-between items-center">
                <button
                    onClick={() => navigate('/')}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors"
                >
                    ← Back to Directory
                </button>
                <ThemeToggleButton />
            </div>

            <EmployeeForm
                initialData={employee}
                onSubmit={handleSubmit}
                onCancel={() => navigate('/')}
            />
        </div>
    );
};

export default EmployeeDetails;
