// File: src/pages/DealsPage.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getMyDeals } from '@/api';
import { toast } from 'react-hot-toast';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import { FiFolderPlus } from 'react-icons/fi';

const DealsPage = () => {
  useAuthRedirect();
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const data = await getMyDeals();
        setDeals(data || []);
      } catch (error) {
        toast.error(error.message || 'Error fetching deals.');
      } finally {
        setLoading(false);
      }
    };
    fetchDeals();
  }, []);

  const statusColors = {
    pending: 'bg-yellow-500',
    active: 'bg-blue-600',
    completed: 'bg-green-600',
    disputed: 'bg-red-600',
    cancelled: 'bg-gray-500',
  };

  return (
    <>
      <Helmet><title>My Deals - Dealcross</title></Helmet>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">My Deals</h1>
          {loading ? (
            <p className="text-lg text-center text-yellow-400">Loading deals...</p>
          ) : deals.length === 0 ? (
            <div className="text-center py-10 space-y-4">
              <FiFolderPlus className="mx-auto text-5xl text-blue-500" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No active deals found. Start a new one to secure your transactions.
              </p>
              <a href="/start-deal" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                Start a Deal
              </a>
            </div>
          ) : (
            <div className="grid gap-4">
              {deals.map((deal) => (
                <div key={deal.deal_id} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <h2 className="text-lg font-semibold">{deal.title}</h2>
                    <span className={`text-sm px-3 py-1 rounded ${statusColors[deal.status.label.toLowerCase()]}`}>
                      {deal.status.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Role: <span className="capitalize">{deal.role}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Amount: <span className="font-medium">${Number(deal.amount).toFixed(2)}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Counterparty: <span className="font-medium">{deal.counterparty.username}</span>
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {deal.created_at}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DealsPage;