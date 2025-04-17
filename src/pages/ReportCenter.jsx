import React from 'react';
import { FiFileText } from 'react-icons/fi';

const reports = [
  {
    title: 'Deal dispute flagged by user emilyrose',
    type: 'Deal Issue',
    date: 'April 16, 2025',
  },
  {
    title: 'User johnx reported delayed payout',
    type: 'Payment Delay',
    date: 'April 15, 2025',
  },
  {
    title: 'User adebowale flagged suspicious buyer',
    type: 'User Behavior',
    date: 'April 14, 2025',
  },
];

const ReportCenter = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FiFileText /> Report Center
      </h2>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-4 rounded-lg shadow-md flex justify-between items-start"
          >
            <div>
              <h4 className="font-semibold">{report.title}</h4>
              <p className="text-sm text-gray-400">{report.type}</p>
            </div>
            <p className="text-sm text-gray-400">{report.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportCenter;
