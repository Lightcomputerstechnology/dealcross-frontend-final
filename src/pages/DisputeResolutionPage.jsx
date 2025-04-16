import React from 'react';

const DisputeResolutionPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Dispute Resolution</h1>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          This panel shows all open and resolved disputes. Our support team reviews every case and works toward a fair resolution.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Dispute ID</th>
                <th className="px-4 py-2 text-left">Deal Reference</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t dark:border-gray-700">
                <td className="px-4 py-2">DPT-1001</td>
                <td className="px-4 py-2">#A0345</td>
                <td className="px-4 py-2 text-yellow-600">Pending</td>
                <td className="px-4 py-2">2025-04-20</td>
              </tr>
              <tr className="border-t dark:border-gray-700">
                <td className="px-4 py-2">DPT-1002</td>
                <td className="px-4 py-2">#A0346</td>
                <td className="px-4 py-2 text-green-600">Resolved</td>
                <td className="px-4 py-2">2025-04-18</td>
              </tr>
              {/* Add more rows dynamically in future */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisputeResolutionPage;
