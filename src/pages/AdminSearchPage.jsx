// File: src/pages/AdminSearchPage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

const mockResults = [
  { id: 1, type: 'User', label: 'emilyrose', description: 'Active user profile' },
  { id: 2, type: 'Deal', label: 'Web Design', description: 'Ongoing escrow deal' },
  { id: 3, type: 'Dispute', label: 'Delayed Payout', description: 'Filed 3 days ago' },
];

const AdminSearchPage = () => {
  const [query, setQuery] = useState('');
  const filteredResults = mockResults.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Admin Search - Dealcross</title>
        <meta name="description" content="Search through users, deals, disputes, and more in Dealcross admin panel." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <FiSearch /> Admin Search Center
          </h2>
          <input
            type="text"
            placeholder="Search users, deals, disputes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded"
          />
        </div>

        {query && (
          <div className="space-y-4">
            {filteredResults.length === 0 ? (
              <p className="text-gray-400">No results found.</p>
            ) : (
              filteredResults.map((result) => (
                <motion.div
                  key={result.id}
                  className="bg-[#1e293b] p-4 rounded-lg shadow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-blue-400 font-semibold">{result.type}: {result.label}</p>
                  <p className="text-sm text-gray-400">{result.description}</p>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSearchPage;
