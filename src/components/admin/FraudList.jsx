// src/components/admin/FraudList.jsx
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const FraudList = ({ loading, fraudReports }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.ceil(fraudReports.length / perPage);
  const paginated = fraudReports.slice((page - 1) * perPage, page * perPage);

  const headers = [
    { label: "Message", key: "message" },
    { label: "Timestamp", key: "timestamp" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium">
          Recent Alerts (Page {page} of {totalPages})
        </h4>
        {fraudReports.length > 0 && (
          <CSVLink
            data={fraudReports}
            headers={headers}
            filename="fraud_alerts.csv"
            className="text-green-500 text-xs hover:underline"
          >
            Export CSV
          </CSVLink>
        )}
      </div>

      {loading ? (
        <p className="text-yellow-400">Loading fraud alerts...</p>
      ) : fraudReports.length === 0 ? (
        <p className="text-gray-400 text-sm">No fraud alerts available.</p>
      ) : (
        <ul className="space-y-3">
          {paginated.map((item, index) => (
            <li key={index} className="border-b border-gray-700 pb-2">
              <p className="text-white">{item.message}</p>
              <span className="text-xs text-gray-400 block">
                {new Date(item.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}

      {fraudReports.length > perPage && (
        <div className="flex justify-end gap-2 pt-2 text-xs">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="bg-gray-700 px-3 py-1 rounded disabled:opacity-40"
          >
            Prev
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="bg-gray-700 px-3 py-1 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FraudList;