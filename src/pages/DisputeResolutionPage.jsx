// File: src/pages/DisputeResolutionPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const DisputeResolutionPage = () => {
  const [dealId, setDealId] = useState('');
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setStatus('Please log in to submit a dispute.');
      return;
    }

    try {
      const response = await axios.post(
        'https://d-final.onrender.com/disputes/submit',
        {
          deal_id: dealId,
          reason,
          details,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setStatus('Dispute submitted successfully!');
        setDealId('');
        setReason('');
        setDetails('');
      } else {
        setStatus('Failed to submit dispute.');
      }
    } catch (error) {
      setStatus(error.response?.data?.detail || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#1e293b] p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Submit a Dispute</h2>

        <input
          type="text"
          placeholder="Deal ID"
          value={dealId}
          onChange={(e) => setDealId(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          placeholder="Dispute Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
        />

        <textarea
          placeholder="Additional Details (optional)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white"
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold"
        >
          Submit Dispute
        </button>

        {status && (
          <p className="text-yellow-400 text-sm text-center mt-4">{status}</p>
        )}
      </form>
    </div>
  );
};

export default DisputeResolutionPage;
