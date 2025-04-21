import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const KYCUploadPage = () => {
  const [userId, setUserId] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await axios.post('https://d-final.onrender.com/auth/kyc-upload', {
        user_id: parseInt(userId),
        document_type: documentType,
        document_url: documentUrl,
      });

      setStatus('KYC submitted successfully.');
      setUserId('');
      setDocumentType('');
      setDocumentUrl('');
    } catch (error) {
      console.error(error);
      setStatus('Failed to submit KYC.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>KYC Upload - Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-10 px-4">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">KYC Upload</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              placeholder="Your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
              required
            />
            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
              required
            >
              <option value="">Select Document Type</option>
              <option value="passport">Passport</option>
              <option value="ID card">ID Card</option>
              <option value="driver_license">Driver’s License</option>
            </select>
            <input
              type="url"
              placeholder="Document URL (e.g., Imgur or Drive)"
              value={documentUrl}
              onChange={(e) => setDocumentUrl(e.target.value)}
              className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              {loading ? 'Submitting...' : 'Submit KYC'}
            </button>
          </form>
          {status && <p className="mt-4 text-center text-yellow-400">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default KYCUploadPage;
