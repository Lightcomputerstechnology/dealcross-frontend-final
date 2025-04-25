import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function WalletHistoryPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://d-final.onrender.com/wallet/transactions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransactions(response.data || []);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to fetch transactions.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <Helmet>
        <title>Wallet History - Dealcross</title>
        <meta name="description" content="View your wallet transaction history on Dealcross." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Wallet Transaction History</h1>

        {loading ? (
          <p>Loading transactions...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Date</th>
                  <th className="px-4 py-2 border-b">Type</th>
                  <th className="px-4 py-2 border-b">Amount</th>
                  <th className="px-4 py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="text-center">
                    <td className="px-4 py-2 border-b">{new Date(tx.timestamp).toLocaleString()}</td>
                    <td className="px-4 py-2 border-b capitalize">{tx.type}</td>
                    <td className="px-4 py-2 border-b">₦{tx.amount.toLocaleString()}</td>
                    <td className="px-4 py-2 border-b">{tx.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}