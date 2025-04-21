import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const KYCUploadPage = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    document_type: '',
    document_url: '',
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://d-final.onrender.com/kyc/upload', formData);
      setMessage('KYC submitted successfully!');
    } catch (error) {
      console.error('Submission failed', error);
      setMessage('Submission failed. Try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>KYC Upload - Dealcross</title>
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Submit KYC Document</h2>
          {message && <p className="mb-4 text-yellow-400">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              placeholder="User ID"
              className="w-full px-3 py-2 bg-gray-700 rounded"
              required
            />
            <select
              name="document_type"
              value={formData.document_type}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded"
              required
            >
              <option value="">Select Document Type</option>
              <option value="passport">Passport</option>
              <option value="ID card">ID Card</option>
              <option value="driver_license">Driver License</option>
            </select>
            <input
              type="url"
              name="document_url"
              value={formData.document_url}
              onChange={handleChange}
              placeholder="Document URL (from uploader)"
              className="w-full px-3 py-2 bg-gray-700 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default KYCUploadPage;
