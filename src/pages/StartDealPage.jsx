import React, { useState } from 'react';

const StartDealPage = () => {
  const [role, setRole] = useState('buyer');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [escrowType, setEscrowType] = useState('standard');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, title, email, amount, escrowType });
    // TODO: Connect this form to your backend API
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1e293b] p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">
          Start a Deal
        </h2>

        {/* Role Selector */}
        <div className="mb-4 flex justify-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="buyer"
              checked={role === 'buyer'}
              onChange={() => setRole('buyer')}
              className="accent-blue-500"
            />
            I'm a Buyer
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="seller"
              checked={role === 'seller'}
              onChange={() => setRole('seller')}
              className="accent-blue-500"
            />
            I'm a Seller
          </label>
        </div>

        {/* Deal Inputs */}
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
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white"
          />
          <span className="text-sm text-gray-400">USD</span>
        </div>

        {/* Escrow Type */}
        <select
          value={escrowType}
          onChange={(e) => setEscrowType(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white"
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
      </form>
    </div>
  );
};

export default StartDealPage;
