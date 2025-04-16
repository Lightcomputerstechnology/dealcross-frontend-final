import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const StartDealPage = () => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    counterparty: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, amount, counterparty } = form;

    if (!title || !amount || !counterparty) {
      toast.error('Please fill all required fields');
      return;
    }

    toast.success('Deal initialized successfully!');
    setForm({ title: '', amount: '', counterparty: '', description: '' });
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Start a New Deal</h1>

      <form onSubmit={handleSubmit} className="max-w-xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block text-sm mb-1">Deal Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="E.g. Web design payment"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Amount (USD)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter deal amount"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Counterparty Email or ID</label>
          <input
            type="text"
            name="counterparty"
            value={form.counterparty}
            onChange={handleChange}
            placeholder="Enter counterparty email or ID"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Deal Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a short description..."
            rows={4}
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Start Deal
        </button>
      </form>
    </div>
  );
};

export default StartDealPage;
