import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la Plataforma de Streaming</h1>
      <Link to="/login">Ir a Login</Link>
    </div>
  );
}

export default Home;