import React from 'react';

const investments = [
  {
    company: 'Tesla',
    amount: '$5,000',
    roi: '12%',
    date: 'Jan 10, 2024',
  },
  {
    company: 'Apple',
    amount: '$2,000',
    roi: '8%',
    date: 'Mar 3, 2024',
  },
  {
    company: 'Amazon',
    amount: '$3,500',
    roi: '15%',
    date: 'Apr 2, 2024',
  },
];

const InvestorReports = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Investor Reports</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1e293b] rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Amount Invested</th>
              <th className="py-3 px-4">ROI</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-800 hover:bg-gray-700"
              >
                <td className="py-3 px-4">{item.company}</td>
                <td className="py-3 px-4">{item.amount}</td>
                <td className="py-3 px-4 text-green-400">{item.roi}</td>
                <td className="py-3 px-4 text-gray-400">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestorReports;
