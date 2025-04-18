// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://d-final.onrender.com/auth/login', {
        email,
        password,
      });

      if (response.data && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        navigate('/deals');
      } else {
        setStatus('Login failed. Please check credentials.');
      }
    } catch (err) {
      setStatus(err.response?.data?.detail || 'Login failed.');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
        >
          Login
        </button>
        {status && <p className="text-yellow-400 text-center text-sm">{status}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
