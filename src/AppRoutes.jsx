import React from 'react';

const fraudLogs = [
  {
    id: 1,
    user: 'user@example.com',
    issue: 'Multiple failed payment attempts',
    date: '2024-04-15',
    status: 'Flagged',
  },
  {
    id: 2,
    user: 'scamalert@buyer.com',
    issue: 'Reported for non-delivery',
    date: '2024-04-14',
    status: 'Under Review',
  },
  {
    id: 3,
    user: 'admin@fakesite.io',
    issue: 'Phishing domain linked',
    date: '2024-04-13',
    status: 'Blocked',
  },
];

const FraudDetectionLog = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6">Fraud Detection Log</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border rounded shadow">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Issue</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {fraudLogs.map(log => (
              <tr key={log.id} className="border-t border-gray-300 dark:border-gray-600">
                <td className="py-3 px-4">{log.user}</td>
                <td className="py-3 px-4">{log.issue}</td>
                <td className="py-3 px-4">{log.date}</td>
                <td className="py-3 px-4">{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FraudDetectionLog;
