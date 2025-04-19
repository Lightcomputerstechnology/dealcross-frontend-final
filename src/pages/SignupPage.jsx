import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Simulated signup logic
    const fakeUser = {
      email,
      role: email.includes('seller') ? 'seller' : 'buyer', // simple logic for now
      token: 'fake-signup-token'
    };

    localStorage.setItem('user', JSON.stringify(fakeUser));
    console.log('Signed up as:', fakeUser);

    // Redirect (optional)
    window.location.href = '/deals';
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none text-gray-900 dark:text-white"
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none text-gray-900 dark:text-white"
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none text-gray-900 dark:text-white"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
            Log in
          </a>
        </p>
      </form>
    </main>
  );
};

export default SignupPage;
