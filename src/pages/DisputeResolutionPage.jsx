import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisputeResolutionPage = () => {
  const [dealId, setDealId] = useState('');
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState(null);
  const [disputes, setDisputes] = useState([]);

  const token = localStorage.getItem('token');

  // Fetch existing disputes
  const fetchDisputes = async () => {
    if (!token) return;
    try {
      const res = await axios.get('https://d-final.onrender.com/disputes/my-disputes', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDisputes(res.data || []);
    } catch (err) {
      console.error('Failed to load disputes:', err);
    }
  };

  useEffect(() => {
    fetchDisputes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setStatus('Please log in to submit a dispute.');
      return;
    }

    try {
      const response = await axios.post(
        'https://d-final.onrender.com/disputes/create',
        { deal_id: dealId, reason, details },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200 || response.status === 201) {
        setStatus('Dispute submitted successfully!');
        setDealId('');
        setReason('');
        setDetails('');
        fetchDisputes(); // Refresh dispute list
      } else {
        setStatus('Failed to submit dispute.');
      }
    } catch (error) {
      setStatus(error.response?.data?.detail || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Dispute Resolution Center</h2>

        {/* Submit Dispute Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1e293b] p-6 rounded-lg shadow mb-10"
        >
          <h3 className="text-lg font-semibold mb-4">Submit a New Dispute</h3>

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
            className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
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

        {/* Existing Disputes List */}
        <div className="bg-[#1e293b] p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Your Disputes</h3>
          {disputes.length === 0 ? (
            <p className="text-gray-400">No disputes found.</p>
          ) : (
            <ul className="space-y-4">
              {disputes.map((d) => (
                <li key={d.id} className="border-b border-gray-700 pb-2">
                  <p className="font-bold">Deal ID: {d.deal_id}</p>
                  <p>Reason: {d.reason}</p>
                  <p>Status: {d.status}</p>
                  <p className="text-gray-400 text-sm">
                    Created: {new Date(d.created_at).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;