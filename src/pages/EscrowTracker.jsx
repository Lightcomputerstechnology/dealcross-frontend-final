// File: src/pages/EscrowTracker.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EscrowTracker = () => {
  const [deals, setDeals] = useState([]);
  const [status, setStatus] = useState('Loading deals...');

  useEffect(() => {
    const fetchDeals = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setStatus('Please log in to view your deals.');
        return;
      }

      try {
        const response = await axios.get('https://d-final.onrender.com/deals/tracker', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.length === 0) {
          setStatus('You have no deals yet.');
        } else {
          setDeals(response.data);
          setStatus(null);
        }
      } catch (error) {
        setStatus('Failed to load deals.');
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Escrow Deal Tracker</h2>

      {status && <p className="text-yellow-400 mb-6">{status}</p>}

      <div className="space-y-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between"
          >
            <div>
              <h4 className="font-semibold">{deal.title}</h4>
              <p className="text-sm text-gray-400">{deal.created_at}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-400 font-bold">${deal.amount}</p>
              <p className="text-sm text-gray-400">{deal.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscrowTracker;
