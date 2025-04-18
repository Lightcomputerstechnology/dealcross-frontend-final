// src/pages/DealsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <p className="text-lg">Loading deals...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Please log in to view your deals.</h2>
        <div className="flex gap-4 mt-2">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">My Deals</h1>
      {deals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">You have no active deals yet.</p>
      ) : (
        <ul className="space-y-4">
          {deals.map((deal) => (
            <li
              key={deal.id}
              className="border border-gray-300 dark:border-gray-700 rounded p-4 bg-gray-50 dark:bg-gray-800"
            >
              <h2 className="font-semibold">{deal.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Role: {deal.role} | Status: {deal.status} | Amount: ${deal.amount}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DealsPage;
