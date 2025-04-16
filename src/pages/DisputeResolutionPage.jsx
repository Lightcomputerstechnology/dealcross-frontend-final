import React from 'react';

const DisputeResolutionPage = () => {
  const disputes = [
    {
      id: 'D001',
      parties: 'UserA vs UserB',
      reason: 'Non-delivery of digital goods',
      status: 'Resolved',
      resolution: 'Refund issued to buyer',
      date: '2025-05-03',
    },
    {
      id: 'D002',
      parties: 'UserC vs UserD',
      reason: 'Disputed payment confirmation',
      status: 'Pending',
      resolution: 'Awaiting admin review',
      date: '2025-05-07',
    },
  ];

  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Dispute Resolution Log</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Dispute ID</th>
              <th className="py-3 px-4 text-left">Parties</th>
              <th className="py-3 px-4 text-left">Reason</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Resolution</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute) => (
              <tr key={dispute.id} className="border-t border-gray-600">
                <td className="py-2 px-4">{dispute.id}</td>
                <td className="py-2 px-4">{dispute.parties}</td>
                <td className="py-2 px-4">{dispute.reason}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${dispute.status === 'Resolved' ? 'bg-green-600' : 'bg-yellow-500'}`}>
                    {dispute.status}
                  </span>
                </td>
                <td className="py-2 px-4">{dispute.resolution}</td>
                <td className="py-2 px-4">{dispute.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;
