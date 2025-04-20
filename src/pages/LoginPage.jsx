import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Field validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('https://d-final.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.detail || 'Invalid credentials.');
        return;
      }

      const result = await response.json();
      localStorage.setItem('token', result.access_token);
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = '/deals';
    } catch (err) {
      setError('Login failed. Please check your network and try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Dealcross</title>
        <meta name="description" content="Sign in securely to your Dealcross account." />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            required
          />

          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            required
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Log In
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Forgot password?{' '}
            <a href="/forgot-password" className="text-blue-600 hover:underline dark:text-blue-400">
              Reset it here
            </a>
          </p>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
