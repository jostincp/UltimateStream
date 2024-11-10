import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'; // Importa los íconos

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Controlar el estado de apertura/cierre

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna entre abierto y cerrado
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen transition-all 
          ${isOpen ? 'w-64' : 'w-16'} 
          md:w-64 md:block lg:block`}
      >
        <div className="p-4 flex justify-between">
          {/* Botón de abrir/cerrar menú en pantallas pequeñas */}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
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
            {/* Nueva sección de Alertas */}
            <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
              <a href="/alertas">Alertas</a> {/* Enlace a la sección de Alertas */}
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
