import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiRefreshCw, FiActivity } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ServerHealthPage = () => {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastChecked, setLastChecked] = useState(null);

  const fetchHealth = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://d-final.onrender.com/health'); // Backend health endpoint
      setHealthData(response.data);
      setLastChecked(new Date());
    } catch (err) {
      toast.error('Failed to fetch server health data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 60000); // Auto-refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  const renderStatus = (status) => (
    <span className={`flex items-center gap-2 font-medium`}>
      <span
        className={`w-3 h-3 rounded-full ${
          status ? 'bg-green-400' : 'bg-red-400'
        }`}
      ></span>
      {status ? 'Online' : 'Offline'}
    </span>
  );

  return (
    <>
      <Helmet>
        <title>Server Health - Dealcross Admin</title>
        <meta name="description" content="Monitor server and service health status for Dealcross." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FiActivity /> Server Health Monitor
          </h2>
          <button
            onClick={fetchHealth}
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            <FiRefreshCw className={loading ? 'animate-spin' : ''} /> {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {healthData ? (
          <div className="space-y-4">
            <div className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between">
              <span>Backend API</span>
              {renderStatus(healthData.api_status)}
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between">
              <span>Database Connection</span>
              {renderStatus(healthData.db_status)}
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between">
              <span>Uptime</span>
              <span className="text-gray-300">{healthData.uptime}</span>
            </div>
          </div>
        ) : (
          <p className="text-yellow-400">No health data available.</p>
        )}

        {lastChecked && (
          <p className="text-sm text-gray-400 mt-4">
            Last checked: {lastChecked.toLocaleString()}
          </p>
        )}
      </div>
    </>
  );
};

export default ServerHealthPage;