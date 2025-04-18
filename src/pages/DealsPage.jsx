// src/pages/DealsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DealsPage = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Please login to view your deals.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://d-final.onrender.com/deals/my-deals', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDeals(response.data);
      } catch (err) {
        setError(err.response?.data?.detail || 'Failed to fetch deals.');
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (loading) return <p className="text-center mt-6 text-blue-400">Loading deals...</p>;
  if (error) return <p className="text-center mt-6 text-red-400">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-2xl font-bold mb-6">My Deals</h1>
      {deals.length === 0 ? (
        <p className="text-center text-gray-400">You have no deals yet.</p>
      ) : (
        <div className="space-y-4">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-[#1e293b] p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{deal.title}</h2>
              <p>Role: {deal.role}</p>
              <p>Amount: ${deal.amount}</p>
              <p>Status: <span className="text-yellow-400">{deal.status}</span></p>
              <p>Escrow Type: {deal.escrow_type}</p>
              <p className="text-sm text-gray-400">Created: {new Date(deal.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DealsPage;
