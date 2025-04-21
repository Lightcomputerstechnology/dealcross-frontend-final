import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const KYCStatusPage = () => {
  const [kycData, setKycData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchKYCStatus = async () => {
    try {
      const response = await axios.get('https://d-final.onrender.com/auth/kyc-status');
      setKycData(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load KYC status.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKYCStatus();
  }, []);

  return (
    <>
      <Helmet>
        <title>KYC Status - Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">KYC Status</h1>

          {loading ? (
            <p className="text-yellow-400 text-center">Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : kycData.length === 0 ? (
            <p className="text-center text-gray-400">No KYC records found.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500 uppercase text-xs">
                  <th className="py-2">User ID</th>
                  <th>Document Type</th>
                  <th>Document</th>
                  <th>Status</th>
                  <th>Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {kycData.map((item) => (
                  <tr key={item.id} className="border-t border-gray-700">
                    <td className="py-2">{item.user_id}</td>
                    <td>{item.document_type}</td>
                    <td>
                      <a
                        href={item.document_url}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td className={`font-semibold ${item.status === 'approved' ? 'text-green-500' : item.status === 'rejected' ? 'text-red-500' : 'text-yellow-400'}`}>
                      {item.status}
                    </td>
                    <td>{new Date(item.submitted_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default KYCStatusPage;
