// File: src/pages/KYCUploadPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const KYCUploadPage = () => {
  const [form, setForm] = useState({
    user_id: '',
    document_type: '',
    document_url: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ user_id: '', document_type: '', document_url: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('https://d-final.onrender.com/auth/kyc-upload', {
        user_id: parseInt(form.user_id),
        document_type: form.document_type,
        document_url: form.document_url,
      });

      setStatus({ type: 'success', message: 'KYC submitted successfully.' });
      resetForm();
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Failed to submit KYC.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>KYC Upload - Dealcross</title>
        <meta name="description" content="Submit your KYC for verification on Dealcross" />
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-10 px-4">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">KYC Upload</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="user_id" className="block mb-1">User ID</label>
              <input
                type="number"
                name="user_id"
                value={form.user_id}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
                placeholder="Enter your user ID"
                required
              />
            </div>
            <div>
              <label htmlFor="document_type" className="block mb-1">Document Type</label>
              <select
                name="document_type"
                value={form.document_type}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
                required
              >
                <option value="">Select Type</option>
                <option value="passport">Passport</option>
                <option value="ID card">ID Card</option>
                <option value="driver_license">Driver’s License</option>
              </select>
            </div>
            <div>
              <label htmlFor="document_url" className="block mb-1">Document URL</label>
              <input
                type="url"
                name="document_url"
                value={form.document_url}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-800"
                placeholder="Link to your document (e.g., Imgur or Drive)"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              {loading ? 'Submitting...' : 'Submit KYC'}
            </button>
          </form>

          {status.message && (
            <p className={`mt-4 text-center ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default KYCUploadPage;
