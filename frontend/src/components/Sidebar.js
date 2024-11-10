// src/components/Sidebar.js
import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Controlar el estado de apertura/cierre

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna entre abierto y cerrado
  };

  return (
    <div className={`flex ${isOpen ? 'w-64' : 'w-16'} transition-all`}>
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} h-screen transition-all`}>
        <div className="p-4">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {isOpen ? 'Collapse' : 'Expand'}
          </button>
        </div>
        <div className="mt-6">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
              <a href="#">Dashboard</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
              <a href="#">Queue</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
              <a href="#">Settings</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
              <a href="#">Users</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Aquí irá el contenido principal */}
      </div>
    </div>
  );
}

export default Sidebar;
