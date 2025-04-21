import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const KYCTestView = () => {
  const [kycList, setKycList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(''); // Add a valid token here for testing
  const [error, setError] = useState('');

  const fetchKYCStatus = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://d-final.onrender.com/kyc/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setKycList(response.data);
    } catch (err) {
      setError('Failed to fetch KYC data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchKYCStatus();
    }
  }, [token]);

  return (
    <>
      <Helmet>
        <title>KYC Test View - Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow-lg">
          <h1 className="text-xl font-bold mb-4">Test Your KYC Status</h1>

          <input
            type="text"
            placeholder="Enter your JWT Token"
            className="w-full mb-4 px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />

          <button
            onClick={fetchKYCStatus}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-6"
          >
            Fetch KYC Status
          </button>

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : kycList.length === 0 ? (
            <p className="text-center text-gray-500">No KYC records found.</p>
          ) : (
            <div className="space-y-4">
              {kycList.map((item) => (
                <div key={item.id} className="border p-4 rounded-md bg-gray-50 dark:bg-gray-800">
                  <p><strong>Type:</strong> {item.document_type}</p>
                  <p><strong>Status:</strong> {item.status.toUpperCase()}</p>
                  <p><strong>Submitted:</strong> {new Date(item.submitted_at).toLocaleString()}</p>
                  <p><strong>Document:</strong> <a href={item.document_url} target="_blank" rel="noreferrer" className="text-blue-500 underline">View</a></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default KYCTestView;
