import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import { getConfirmedPairing } from '@/api';  // ✅ Import pairing check
import { toast } from 'react-hot-toast';

const StartDealPage = () => {
  useAuthRedirect();

  const [pairingConfirmed, setPairingConfirmed] = useState(false);
  const [loadingPairing, setLoadingPairing] = useState(true);

  const [role, setRole] = useState('buyer');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [escrowType, setEscrowType] = useState('standard');
  const [category, setCategory] = useState('product');
  const [message, setMessage] = useState('');
  const [expectedDate, setExpectedDate] = useState('');
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const MAX_FILE_SIZE_MB = 10;

  useEffect(() => {
    const checkPairing = async () => {
      try {
        const data = await getConfirmedPairing();
        if (data.status === 'confirmed') {
          setPairingConfirmed(true);
        } else {
          toast.error('Pairing not confirmed yet.');
        }
      } catch (err) {
        toast.error(err.message || 'Pairing check failed.');
      } finally {
        setLoadingPairing(false);
      }
    };
    checkPairing();
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter((file) => file.size / 1024 / 1024 <= MAX_FILE_SIZE_MB);
    setFiles(validFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pairingConfirmed) {
      setStatus('Pairing confirmation required before starting a deal.');
      return;
    }

    setSubmitting(true);
    const token = localStorage.getItem('token');
    if (!token) {
      setStatus('Login required.');
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('role', role);
    formData.append('counterparty_email', email);
    formData.append('amount', parseFloat(amount));
    formData.append('escrow_type', escrowType);
    formData.append('category', category);
    formData.append('message', message);
    if (expectedDate) formData.append('expected_completion', expectedDate);
    files.forEach((file) => formData.append('attachments', file));

    try {
      const response = await axios.post(
        'https://d-final.onrender.com/deals/create',  // ✅ Adjust when backend is ready
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        setStatus('Deal created successfully!');
        setTitle(''); setEmail(''); setAmount('');
        setEscrowType('standard'); setCategory('product');
        setMessage(''); setExpectedDate(''); setFiles([]);
      } else {
        setStatus('Deal creation failed.');
      }
    } catch (error) {
      setStatus(error.response?.data?.detail || 'Error creating deal.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingPairing) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#0f172a] text-white">
        <p className="text-lg">Checking pairing confirmation...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet><title>Start a Deal - Dealcross</title></Helmet>
      <main className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
        {!pairingConfirmed ? (
          <p className="text-center text-yellow-400">Pairing not confirmed. Please complete pairing before creating a deal.</p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4" encType="multipart/form-data">
            <h2 className="text-xl font-semibold text-center">Start a Deal</h2>
            {/* (KEEP ALL YOUR ORIGINAL FIELDS HERE UNTOUCHED) */}
            {/* ... Existing Form Fields (title, role, email, amount, etc.) */}
            <button type="submit" disabled={submitting} className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold">
              {submitting ? 'Submitting...' : 'Create Deal'}
            </button>
            {status && <p className="text-center text-yellow-400 mt-2">{status}</p>}
          </form>
        )}
      </main>
    </>
  );
};

export default StartDealPage;