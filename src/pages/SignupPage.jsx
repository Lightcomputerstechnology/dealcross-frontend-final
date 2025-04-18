// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://d-final.onrender.com/auth/register', {
        email,
        name,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setStatus('Account created. Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setStatus('Signup failed.');
      }
    } catch (err) {
      setStatus(err.response?.data?.detail || 'Signup failed.');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
        />
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
          Create Account
        </button>
        {status && <p className="text-yellow-400 text-center text-sm">{status}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
