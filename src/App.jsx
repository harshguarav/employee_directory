import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-black text-text-primary-dark dark:text-text-primary-light font-sans transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<EmployeeDetails />} />
        <Route path="/edit/:id" element={<EmployeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
