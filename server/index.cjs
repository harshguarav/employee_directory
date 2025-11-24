require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Get all employees
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await prisma.employee.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
});

// Get employee by ID
app.get('/api/employees/:id', async (req, res) => {
    try {
        const employee = await prisma.employee.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch employee' });
    }
});

// Create employee
app.post('/api/employees', async (req, res) => {
    try {
        const { name, role, department, email, phone, image } = req.body;
        const employee = await prisma.employee.create({
            data: {
                name,
                role,
                department,
                email,
                phone,
                image: image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
                active: true
            }
        });
        res.status(201).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create employee' });
    }
});

// Update employee
app.put('/api/employees/:id', async (req, res) => {
    try {
        const employee = await prisma.employee.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update employee' });
    }
});

// Delete employee
app.delete('/api/employees/:id', async (req, res) => {
    try {
        await prisma.employee.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete employee' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
