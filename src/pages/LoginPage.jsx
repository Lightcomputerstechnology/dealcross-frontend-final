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

      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        setStatus('Login successful! Redirecting...');
        setTimeout(() => navigate('/wallet'), 1500); // Redirect after 1.5s
      } else {
        setStatus('Login failed. Please try again.');
      }
    } catch (error) {
      setStatus(error.response?.data?.detail || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0f172a] text-white px-4">
      <div className="w-full max-w-sm bg-[#1e293b] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login to Dealcross</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 rounded bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Log In
          </button>
        </form>

        {status && (
          <p className="text-sm text-center mt-4 text-yellow-400">{status}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
