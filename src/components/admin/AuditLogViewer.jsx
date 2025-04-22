// src/components/admin/AuditLogViewer.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('7');

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`https://d-final.onrender.com/admin/audit-logs?days=${timeframe}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLogs(res.data);
    } catch (err) {
      toast.error('Failed to load audit logs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 20000);
    return () => clearInterval(interval);
  }, [timeframe]);

  const exportCSV = () => {
    const headers = 'Admin,Action,Target,Note,Timestamp\n';
    const rows = logs
      .map(
        (log) =>
          `${log.admin_username},${log.action},${log.target},${log.note || '-'},${new Date(
            log.timestamp
          ).toLocaleString()}`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'audit_logs.csv';
    link.click();
  };

  const exportPDF = () => {
    const container = document.getElementById('audit-log-container');
    if (!container) return;

    html2canvas(container).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.text('Dealcross - Audit Log Report', 14, 15);
      pdf.addImage(imgData, 'PNG', 0, 20, imgWidth, imgHeight);
      pdf.save('audit_logs.pdf');
    });
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex gap-4 items-center">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-gray-800 border border-gray-600 px-3 py-1 rounded text-white"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last 1 year</option>
          </select>
          <button onClick={fetchLogs} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white rounded">
            Refresh
          </button>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button onClick={exportCSV} className="bg-green-600 hover:bg-green-700 px-3 py-1 text-white rounded">
            Export CSV
          </button>
          <button onClick={exportPDF} className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white rounded">
            Export PDF
          </button>
        </div>
      </div>

      {/* Log Viewer */}
      <div id="audit-log-container" className="space-y-4">
        {loading ? (
          <p className="text-yellow-400">Loading audit logs...</p>
        ) : logs.length === 0 ? (
          <p className="text-sm text-gray-400">No admin actions logged yet.</p>
        ) : (
          logs.map((log, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm">
                    <span className="font-semibold">{log.admin_username}</span>{' '}
                    performed <span className="text-blue-400">{log.action}</span> on{' '}
                    <span className="text-green-400">{log.target}</span>
                  </p>
                  {log.note && (
                    <p className="text-gray-400 text-xs mt-1">Note: {log.note}</p>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(log.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AuditLogViewer;
