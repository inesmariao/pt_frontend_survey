import React from 'react';
import { BrowserRouter as Router, Route,  Routes, Navigate } from 'react-router-dom';
import { Registro } from '../components/Registro';
import { Login } from '../components/Login';
import { Encuesta } from '../components/Encuesta';
import { Logout } from '../components/Logout';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/encuesta" element={<Encuesta />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};


