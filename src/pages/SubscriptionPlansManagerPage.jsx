// File: src/pages/SubscriptionPlansManagerPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { FiRefreshCw, FiEdit3, FiPlus } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const SubscriptionPlansManagerPage = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://d-final.onrender.com/admin/subscription-plans', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setPlans(response.data.data || []);
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Failed to fetch subscription plans.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <Helmet>
        <title>Subscription Plans - Admin | Dealcross</title>
        <meta name="description" content="Manage subscription plans for Dealcross users, including pricing and benefits." />
      </Helmet>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Subscription Plans Manager</h2>
        <div className="flex gap-2">
          <button onClick={fetchPlans} className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            <FiRefreshCw /> Refresh
          </button>
          <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            <FiPlus /> Add Plan
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-yellow-400">Loading plans...</p>
      ) : plans.length === 0 ? (
        <p className="text-gray-400">No subscription plans available.</p>
      ) : (
        <div className="space-y-4">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{plan.name}</p>
                <p className="text-sm text-gray-400">{plan.description}</p>
                <p className="text-green-400 font-bold mt-2">${plan.price} / {plan.duration} days</p>
              </div>
              <button className="flex items-center gap-1 bg-yellow-500 px-3 py-1 rounded text-sm hover:bg-yellow-600">
                <FiEdit3 /> Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlansManagerPage;
