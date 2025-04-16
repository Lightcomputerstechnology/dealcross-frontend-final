import React from 'react';

const mockTransactions = [
  { id: 1, type: 'Deposit', amount: 1200, status: 'Success', date: '2025-04-01' },
  { id: 2, type: 'Withdrawal', amount: 500, status: 'Pending', date: '2025-04-03' },
  { id: 3, type: 'Share Purchase', amount: 300, status: 'Success', date: '2025-04-05' },
];

const TransactionHistory = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Date</th>
                <th className="text-left py-2 px-4">Type</th>
                <th className="text-left py-2 px-4">Amount</th>
                <th className="text-left py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockTransactions.map(tx => (
                <tr key={tx.id}>
                  <td className="py-2 px-4">{tx.date}</td>
                  <td className="py-2 px-4">{tx.type}</td>
                  <td className="py-2 px-4">${tx.amount}</td>
                  <td className={`py-2 px-4 font-semibold ${tx.status === 'Success' ? 'text-green-600' : 'text-yellow-500'}`}>
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
