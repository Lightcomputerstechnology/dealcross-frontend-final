import React from 'react';

const deals = [
  { id: 1, title: 'Graphics Design Project', status: 'Processing' },
  { id: 2, title: 'Electronics Shipment', status: 'Shipped' },
  { id: 3, title: 'Freelance Writing', status: 'Awaiting Payment' },
];

const statusColors = {
  'Processing': 'bg-yellow-100 text-yellow-800',
  'Shipped': 'bg-blue-100 text-blue-800',
  'Awaiting Payment': 'bg-red-100 text-red-800',
};

export default function DealsInProgress() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Deals in Progress
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map(deal => (
            <div
              key={deal.id}
              className="border border-gray-300 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-800 shadow"
            >
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                {deal.title}
              </h3>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                  statusColors[deal.status] || 'bg-gray-200 text-gray-800'
                }`}
              >
                {deal.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
