// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/dealcross-logo.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Authentication logic goes here
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
      style={{
        backgroundImage: `url(${Logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '80%',
        opacity: 1,
      }}
    >
      <div className="bg-white/90 dark:bg-gray-900/90 p-8 rounded shadow-lg w-full max-w-md backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Dealcross</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
