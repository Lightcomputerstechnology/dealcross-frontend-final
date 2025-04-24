// File: src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/api';  // ✅ Use api.js

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setStatus('Please enter both email and password.');
      return;
    }
    setStatus('Processing...');
    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      const result = await login(formData);
      localStorage.setItem('token', result.access_token);
      setStatus('Login successful!');
      navigate('/wallet');  // Redirect after login
    } catch (err) {
      setStatus(err.message || 'Login failed.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-red-500">{status}</p>}
    </div>
  );
}