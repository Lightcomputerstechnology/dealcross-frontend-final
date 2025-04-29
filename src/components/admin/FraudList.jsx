// src/components/admin/FraudList.jsx

import React from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const FraudList = ({ loading, fraudReports, onRefresh }) => {
  const exportCSV = () => {
    const headers = 'Message,Timestamp\n';
    const rows = fraudReports
      .map((r) => `"${r.message.replace(/"/g, '""')}","${new Date(r.timestamp).toLocaleString()}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'fraud_alerts.csv';
    link.click();
  };

  const exportPDF = () => {
    const container = document.querySelector('#fraud-list-container');
    if (!container) return;

    html2canvas(container).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.text('Dealcross - Fraud Alerts Report', 14, 15);
      pdf.addImage(imgData, 'PNG', 0, 20, imgWidth, imgHeight);
      pdf.save('fraud_alerts.pdf');
    });
  };

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-300">Total Alerts: {fraudReports.length}</div>
        <div className="flex gap-2">
          <button
            onClick={onRefresh}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white text-xs rounded"
          >
            Refresh
          </button>
          <button
            onClick={exportCSV}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 text-white text-xs rounded"
          >
            Export CSV
          </button>
          <button
            onClick={exportPDF}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white text-xs rounded"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* List Content */}
      <div id="fraud-list-container">
        {loading ? (
          <p className="text-yellow-400">Loading fraud alerts...</p>
        ) : fraudReports.length === 0 ? (
          <p className="text-gray-400 text-sm">No fraud alerts available.</p>
        ) : (
          <ul className="text-sm space-y-3">
            {fraudReports.map((report, index) => (
              <li
                key={index}
                className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
              >
                <div className="font-medium text-red-400">{report.message}</div>
                <div className="text-xs text-gray-400">
                  {new Date(report.timestamp).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

FraudList.propTypes = {
  loading: PropTypes.bool.isRequired,
  fraudReports: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRefresh: PropTypes.func, // now optional
};

export default FraudList;
