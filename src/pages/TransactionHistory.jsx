import React, { useEffect, useState } from 'react';

const mockTransactions = [
  {
    id: 'TXN001',
    type: 'Credit',
    amount: 150.0,
    date: '2024-04-15',
    status: 'Completed',
  },
  {
    id: 'TXN002',
    type: 'Debit',
    amount: 75.5,
    date: '2024-04-13',
    status: 'Pending',
  },
  {
    id: 'TXN003',
    type: 'Credit',
    amount: 200.0,
    date: '2024-04-10',
    status: 'Failed',
  },
];

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Replace with actual API call later
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Transaction History</h1>

      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="w-full bg-white dark:bg-gray-900 border-collapse shadow-md rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Transaction ID</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Amount ($)</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t border-gray-300 dark:border-gray-700">
                <td className="py-2 px-4">{txn.id}</td>
                <td className="py-2 px-4">{txn.type}</td>
                <td className="py-2 px-4">${txn.amount.toFixed(2)}</td>
                <td className="py-2 px-4">{txn.date}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      txn.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : txn.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}

            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500 dark:text-gray-400">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
