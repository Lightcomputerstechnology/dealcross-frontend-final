import React, { useState } from 'react';

const DisputeResolutionPage = () => {
  const [form, setForm] = useState({
    dealId: '',
    reason: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert('Dispute submitted successfully!');
    setForm({ dealId: '', reason: '', description: '' });
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Dispute Resolution Center</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block mb-2 font-semibold" htmlFor="dealId">
            Deal ID
          </label>
          <input
            type="text"
            name="dealId"
            id="dealId"
            value={form.dealId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="reason">
            Reason for Dispute
          </label>
          <select
            name="reason"
            id="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800"
            required
          >
            <option value="">-- Select Reason --</option>
            <option value="Non-delivery">Non-delivery</option>
            <option value="Fraudulent Activity">Fraudulent Activity</option>
            <option value="Poor Quality">Poor Quality</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800"
            placeholder="Explain the issue in detail..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Dispute
        </button>
      </form>
    </div>
  );
};

export default DisputeResolutionPage;
