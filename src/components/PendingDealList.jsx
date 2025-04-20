// src/components/admin/PendingDealList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const PendingDealList = () => {
  const [deals, setDeals] = useState([]);
  const [status, setStatus] = useState('Loading pending deals...');

  const fetchDeals = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/pending-deals');
      setDeals(res.data);
      setStatus('');
    } catch {
      setStatus('Failed to load deals.');
    }
  };

  const approveDeal = async (dealId) => {
    const confirm = window.confirm('Approve this deal?');
    if (!confirm) return;

    try {
      await axios.post(`https://d-final.onrender.com/admin/approve-deal/${dealId}`);
      toast.success('Deal approved!');
      fetchDeals();
    } catch {
      toast.error('Failed to approve deal');
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold mb-3 text-white">Pending Deal Approvals</h3>
      {status ? (
        <p className="text-yellow-400 text-sm">{status}</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {deals.map((deal) => (
            <li key={deal.id} className="flex justify-between items-center text-gray-300">
              <span>{deal.title} - ${deal.amount}</span>
              <button
                onClick={() => approveDeal(deal.id)}
                className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingDealList;
