import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getMyDeals } from '@/api';
import { toast } from 'react-hot-toast';
import useAuthRedirect from '@/hooks/useAuthRedirect';

const DealsPage = () => {
  useAuthRedirect(); // Protect this page for authenticated users

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

  return (
    <>
      <Helmet>
        <title>My Deals - Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">My Deals</h1>

          {loading ? (
            <p className="text-lg animate-pulse text-center text-yellow-400">Loading deals...</p>
          ) : deals.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">You have no active deals yet.</p>
          ) : (
            <div className="grid gap-4">
              {deals.map((deal) => (
                <div
                  key={deal.id}
                  className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">{deal.title}</h2>
                    <span className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md capitalize">
                      {deal.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                    Role: <span className="capitalize">{deal.role}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Amount: <span className="font-medium">${Number(deal.amount).toFixed(2)}</span>
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
