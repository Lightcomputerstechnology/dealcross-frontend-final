// File: src/pages/AdminSearchPage.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdminSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    if (!query.trim()) {
      toast.error('Please enter a search query.');
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://d-final.onrender.com/admin/search?q=${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResults(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch search results.');
      toast.error(err.response?.data?.detail || 'Search error.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optional: Auto search if needed
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Search - Dealcross</title>
        <meta name="description" content="Admin tool to search for users, deals, and logs on Dealcross." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FiSearch className="text-blue-400" /> Admin Search
          </h2>
          <button onClick={fetchResults} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded">
            <FiRefreshCw /> Refresh
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search users, deals, logs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white"
          />
          <button
            onClick={fetchResults}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded font-medium"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p className="text-yellow-400">Searching...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : results.length === 0 ? (
          <p className="text-gray-400">No results found.</p>
        ) : (
          <div className="space-y-4">
            {results.map((item) => (
              <div key={item.id} className="bg-[#1e293b] p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">{item.title || item.username}</h4>
                <p className="text-sm text-gray-400">{item.description || item.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSearchPage;
