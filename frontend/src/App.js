import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AlertSettings from './components/AlertSettings';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar: Este será el menú lateral que estará visible en todas las páginas donde se desee */}
        <Sidebar />
        
        {/* Contenido principal de la página */}
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alertas" element={<AlertSettings />} /> {/* Ruta para las alertas */}
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
