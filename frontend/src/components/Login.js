import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [isStreamer, setIsStreamer] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para el mensaje de confirmación
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleLogin = async () => {
    const endpoint = isStreamer ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/login/moderator';
    try {
      const response = await axios.post(endpoint, { username, password });
      console.log('Login successful:', response.data);

      // Almacenar el token en localStorage
      localStorage.setItem('token', response.data.token);

      // Redirigir al usuario a otra página, por ejemplo, el dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.data) {
        setError('Usuario o contraseña incorrectos'); // Establecer el mensaje de error
      } else {
        setError('Error de conexión o servidor'); // Mensaje de error genérico
      }
    }
  };

  const handleRegister = async () => {
    if (!isStreamer) return;
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
      console.log('Registration successful:', response.data);
      setMessage('Fuiste registrado exitosamente'); // Establecer el mensaje de confirmación
      setError(''); // Limpiar el mensaje de error
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setError('Error al registrar'); // Establecer el mensaje de error
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <button onClick={() => setIsStreamer(true)} className={`p-2 mr-2 ${isStreamer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Login Streamer</button>
        <button onClick={() => setIsStreamer(false)} className={`p-2 ${!isStreamer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Login Moderador</button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mr-2">Login</button>
        <button onClick={handleRegister} className="bg-green-500 text-white p-2">Register</button>
      </div>
      {message && <p className="text-green-500">{message}</p>} {/* Mostrar el mensaje de confirmación */}
      {error && <p className="text-red-500">{error}</p>} {/* Mostrar el mensaje de error */}
    </div>
  );
}

export default Login;