import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AdminKYCPanel = () => {
  const [kycList, setKycList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  const fetchKYCSubmissions = async () => {
    try {
      const response = await axios.get('https://d-final.onrender.com/admin/kyc-submissions');
      setKycList(response.data);
    } catch (error) {
      console.error('Failed to load KYC submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDecision = async (id, decision) => {
    try {
      await axios.put(`https://d-final.onrender.com/admin/kyc-decision/${id}`, {
        decision: decision
      });
      setStatus(`KYC ${id} marked as ${decision}.`);
      fetchKYCSubmissions(); // Refresh list
    } catch (err) {
      console.error(err);
      setStatus('Action failed.');
    }
  };

  useEffect(() => {
    fetchKYCSubmissions();
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin KYC Panel - Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto bg-gray-900 p-6 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin KYC Review Panel</h1>

          {status && <p className="text-center mb-4 text-yellow-400">{status}</p>}

          {loading ? (
            <p className="text-center text-yellow-300">Loading KYC submissions...</p>
          ) : kycList.length === 0 ? (
            <p className="text-center text-gray-400">No pending KYC records.</p>
          ) : (
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead>
                <tr className="text-xs uppercase text-gray-400 border-b border-gray-600">
                  <th>User ID</th>
                  <th>Type</th>
                  <th>Document</th>
                  <th>Status</th>
                  <th>Submitted</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {kycList.map((item) => (
                  <tr key={item.id} className="bg-gray-800 rounded">
                    <td className="py-2">{item.user_id}</td>
                    <td>{item.document_type}</td>
                    <td>
                      <a
                        href={item.document_url}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td className="capitalize font-medium text-yellow-400">{item.status}</td>
                    <td>{new Date(item.submitted_at).toLocaleString()}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDecision(item.id, 'approved')}
                          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleDecision(item.id, 'rejected')}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
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

export default AdminKYCPanel;
