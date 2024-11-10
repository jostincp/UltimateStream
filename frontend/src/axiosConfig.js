import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Cambia esto según la URL base de tu backend
});

export default instance;
