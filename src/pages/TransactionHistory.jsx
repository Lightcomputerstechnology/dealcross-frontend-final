import React from 'react';

const TransactionHistory = () => {
  const transactions = [
    {
      id: 'TXN001',
      type: 'Investment',
      amount: 2500,
      status: 'Success',
      date: '2024-11-01',
    },
    {
      id: 'TXN002',
      type: 'Deal Funding',
      amount: 1000,
      status: 'Pending',
      date: '2024-11-03',
    },
    {
      id: 'TXN003',
      type: 'Withdrawal',
      amount: 1200,
      status: 'Failed',
      date: '2024-11-05',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow-md">
          <thead className="bg-gray-200 dark:bg-gray-700 text-left">
            <tr>
              <th className="p-4">Transaction ID</th>
              <th className="p-4">Type</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-t border-gray-300 dark:border-gray-700">
                <td className="p-4 font-medium">{txn.id}</td>
                <td className="p-4">{txn.type}</td>
                <td className="p-4">${txn.amount.toLocaleString()}</td>
                <td className={`p-4 font-semibold ${
                  txn.status === 'Success'
                    ? 'text-green-500'
                    : txn.status === 'Pending'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}>{txn.status}</td>
                <td className="p-4">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
