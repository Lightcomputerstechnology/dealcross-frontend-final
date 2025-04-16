import React from 'react';

const InvestorReports = () => {
  const reports = [
    {
      id: 1,
      title: 'Q1 Investment Summary',
      description: 'Overview of investments and returns made in Q1.',
      date: '2025-03-31',
    },
    {
      id: 2,
      title: 'Fraud Risk Audit Report',
      description: 'Detailed fraud screening outcomes and scoring.',
      date: '2025-04-01',
    },
    {
      id: 3,
      title: 'Annual ROI Projection',
      description: 'Predicted growth and performance for the year.',
      date: '2025-04-15',
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Investor Reports</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold mb-1">{report.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{report.description}</p>
            <span className="text-sm text-gray-500">Date: {report.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorReports;
