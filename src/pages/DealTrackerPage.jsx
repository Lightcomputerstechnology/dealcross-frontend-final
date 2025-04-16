import React from 'react';

const dummyDeals = [
  {
    id: 'DL-001',
    title: 'Website Design Payment',
    counterparty: 'John Doe',
    amount: 250,
    status: 'Pending',
  },
  {
    id: 'DL-002',
    title: 'Logo Design Work',
    counterparty: 'Jane Smith',
    amount: 100,
    status: 'Delivered',
  },
  {
    id: 'DL-003',
    title: 'Software Subscription',
    counterparty: 'Techie Ltd.',
    amount: 400,
    status: 'Completed',
  },
];

const DealTrackerPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">My Deals</h1>
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="py-3 px-4 border-b text-left">Deal ID</th>
              <th className="py-3 px-4 border-b text-left">Title</th>
              <th className="py-3 px-4 border-b text-left">Counterparty</th>
              <th className="py-3 px-4 border-b text-left">Amount ($)</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyDeals.map((deal) => (
              <tr key={deal.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="py-2 px-4 border-b">{deal.id}</td>
                <td className="py-2 px-4 border-b">{deal.title}</td>
                <td className="py-2 px-4 border-b">{deal.counterparty}</td>
                <td className="py-2 px-4 border-b">${deal.amount}</td>
                <td
                  className={`py-2 px-4 border-b font-semibold ${
                    deal.status === 'Completed'
                      ? 'text-green-600'
                      : deal.status === 'Pending'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  }`}
                >
                  {deal.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealTrackerPage;
