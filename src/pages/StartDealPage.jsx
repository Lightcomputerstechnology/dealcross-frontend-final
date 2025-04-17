// File: src/pages/StartDealPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const StartDealPage = () => {
  const [role, setRole] = useState('buyer');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [escrowType, setEscrowType] = useState('standard');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setStatus('Login required.');
      return;
    }

    try {
      const response = await axios.post(
        'https://d-final.onrender.com/deals/create',
        {
          title,
          role,
          counterparty_email: email,
          amount: parseFloat(amount),
          escrow_type: escrowType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setStatus('Deal created successfully!');
        // Optional: reset form
        setTitle('');
        setEmail('');
        setAmount('');
        setEscrowType('standard');
      } else {
        setStatus('Deal creation failed.');
      }
    } catch (error) {
      setStatus(error.response?.data?.detail || 'Error creating deal.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1e293b] p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Start a Deal</h2>

        {/* Role Selection */}
        <div className="mb-4 flex justify-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="buyer"
              checked={role === 'buyer'}
              onChange={() => setRole('buyer')}
              className="accent-blue-500"
            />
            Buyer
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="seller"
              checked={role === 'seller'}
              onChange={() => setRole('seller')}
              className="accent-blue-500"
            />
            Seller
          </label>
        </div>

        {/* Form Inputs */}
        <input
          type="text"
          placeholder="Deal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full mb-3 px-4 py-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Counterparty Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-3 px-4 py-2 rounded bg-gray-800 text-white"
        />
        <input
          type="number"
          placeholder="Amount (USD)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full mb-3 px-4 py-2 rounded bg-gray-800 text-white"
        />
        <select
          value={escrowType}
          onChange={(e) => setEscrowType(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        >
          <option value="standard">Standard</option>
          <option value="milestone">Milestone</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Create Deal
        </button>

        {status && (
          <p className="text-sm text-center mt-4 text-yellow-400">{status}</p>
        )}
      </form>
    </div>
  );
};

export default StartDealPage;
