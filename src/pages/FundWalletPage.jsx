// File: src/pages/FundWalletPage.jsx import React, { useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet';

const FundWalletPage = () => { const [amount, setAmount] = useState(''); const [status, setStatus] = useState(null); const [submitting, setSubmitting] = useState(false);

const handleFund = async (e) => { e.preventDefault(); const token = localStorage.getItem('token');

if (!token) {
  setStatus('You must be logged in.');
  return;
}

setSubmitting(true);
setStatus(null);

try {
  const response = await axios.post(
    'https://d-final.onrender.com/wallet/fund',
    { amount: parseFloat(amount) },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 200) {
    setStatus('Wallet funded successfully!');
    setAmount('');
  } else {
    setStatus('Funding failed. Please try again.');
  }
} catch (error) {
  setStatus(
    error.response?.data?.detail || 'Something went wrong. Please try again.'
  );
} finally {
  setSubmitting(false);
}

};

return ( <> <Helmet> <title>Fund Wallet - Dealcross</title> <meta name="description" content="Add funds to your Dealcross wallet securely using card, bank or crypto." /> <meta name="keywords" content="dealcross, fund wallet, deposit, crypto, card, usdt" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
    <form
      onSubmit={handleFund}
      className="w-full max-w-sm bg-[#1e293b] p-6 rounded-lg shadow space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Fund Your Wallet</h2>

      <input
        type="number"
        placeholder="Enter amount (USD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
        required
      />

      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-2 rounded font-semibold transition text-white ${
          submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {submitting ? 'Processing...' : 'Fund Wallet'}
      </button>

      {status && <p className="text-yellow-400 text-sm text-center">{status}</p>}
    </form>
  </div>
</>

); };

export default FundWalletPage;

                                 
