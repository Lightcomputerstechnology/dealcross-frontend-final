// File: src/pages/ForgotPasswordPage.jsx import React, { useState } from 'react'; import { Helmet } from 'react-helmet'; import axios from 'axios';

export default function ForgotPasswordPage() { const [email, setEmail] = useState(''); const [status, setStatus] = useState(null);

const handleSubmit = async (e) => { e.preventDefault(); setStatus('Processing...');

try {
  const response = await axios.post('https://d-final.onrender.com/auth/forgot-password', {
    email,
  });

  if (response.status === 200) {
    setStatus('Password reset link sent! Check your email.');
  } else {
    setStatus('Something went wrong. Please try again.');
  }
} catch (error) {
  setStatus(error.response?.data?.detail || 'Failed to send reset email.');
}

};

return ( <> <Helmet> <title>Forgot Password - Dealcross</title> <meta name="description" content="Reset your password by email if you’ve forgotten it." /> <meta name="keywords" content="forgot password, reset, email, dealcross" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<main className="min-h-screen flex items-center justify-center px-6 py-10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-center">Forgot Password</h1>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Enter your email to receive a reset link.
      </p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        required
        className="w-full px-4 py-2 rounded bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
      >
        Send Reset Link
      </button>

      {status && (
        <p className="text-sm text-yellow-400 text-center">{status}</p>
      )}
    </form>
  </main>
</>

); }

