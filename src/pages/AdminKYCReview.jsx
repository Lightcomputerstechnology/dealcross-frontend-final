import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AdminKYCReview = () => {
  const [kycList, setKycList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState('');

  const fetchKycSubmissions = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/kyc-submissions');
      setKycList(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to load KYC data:', err);
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`https://d-final.onrender.com/admin/kyc-status/${id}`, {
        status: status,
      });
      setStatusMessage(`KYC ${id} marked as ${status}`);
      fetchKycSubmissions();
    } catch (err) {
      console.error('Failed to update status:', err);
      setStatusMessage('Update failed.');
    }
  };

  useEffect(() => {
    fetchKycSubmissions();
  }, []);

  return (
    <>
      <Helmet>
        <title>KYC Review - Admin | Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white p-6">
        <h1 className="text-2xl font-bold mb-4">KYC Submissions Review</h1>
        {statusMessage && <p className="mb-4 text-yellow-400">{statusMessage}</p>}

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : kycList.length === 0 ? (
          <p className="text-gray-400">No KYC submissions found.</p>
        ) : (
          <div className="space-y-6">
            {kycList.map((kyc) => (
              <div
                key={kyc.id}
                className="bg-gray-800 p-4 rounded shadow border border-gray-700"
              >
                <p><strong>User ID:</strong> {kyc.user_id}</p>
                <p><strong>Type:</strong> {kyc.document_type}</p>
                <p><strong>Status:</strong> <span className="text-yellow-300">{kyc.status}</span></p>
                <p className="truncate"><strong>URL:</strong> <a href={kyc.document_url} className="underline text-blue-400" target="_blank" rel="noopener noreferrer">View Document</a></p>
                <div className="mt-3 space-x-2">
                  <button
                    onClick={() => updateStatus(kyc.id, 'approved')}
                    className="bg-green-600 px-4 py-1 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(kyc.id, 'rejected')}
                    className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminKYCReview;
