import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LogIn } from 'react-feather';

const DealsPage = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchDeals = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);
      try {
        const response = await axios.get('https://d-final.onrender.com/deals/my-deals', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDeals(response.data || []);
      } catch (error) {
        console.error('Error fetching deals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <p className="text-lg animate-pulse">Loading deals...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <LogIn className="w-12 h-12 mb-4 text-blue-500" />
        <h2 className="text-2xl font-semibold mb-2">Login Required</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300 max-w-md">
          Please log in or sign up to view and manage your escrow deals securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/login"
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full sm:w-auto px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Deals</h1>
        {deals.length === 0 ? (
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
  );
};

export default DealsPage;
