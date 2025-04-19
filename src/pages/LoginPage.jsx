// src/pages/LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
    // handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition duration-300">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-md rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Log In
        </button>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
