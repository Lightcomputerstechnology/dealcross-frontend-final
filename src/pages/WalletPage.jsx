import React, { useEffect, useState } from 'react'; import { Helmet } from 'react-helmet'; import { Link } from 'react-router-dom'; import { getWalletBalance } from '@/api'; import { toast } from 'react-hot-toast'; import useAuthRedirect from '@/hooks/useAuthRedirect'; import { FiAlertCircle } from 'react-icons/fi';

const WalletPage = () => { useAuthRedirect(); // Protect this page

const [balance, setBalance] = useState(null); const [status, setStatus] = useState('Loading...');

useEffect(() => { const fetchWallet = async () => { try { const data = await getWalletBalance(); setBalance(data.balance); setStatus(null); } catch (err) { const msg = err.message || 'Unable to fetch wallet balance.'; setStatus(msg); toast.error(msg); } };

fetchWallet();

}, []);

return ( <> <Helmet> <title>Wallet - Dealcross</title> <meta name="description" content="View your Dealcross wallet balance and manage transactions securely." /> <meta name="keywords" content="wallet, fund, withdraw, escrow, dealcross" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
    <h2 className="text-3xl font-bold mb-6">Wallet</h2>

    <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg space-y-4">
      {balance !== null ? (
        <>
          <p className="text-sm text-gray-400">Available Balance</p>
          <h1 className="text-4xl font-bold">USD {balance.toFixed(2)}</h1>
          {balance === 0 && (
            <div className="flex items-center gap-2 mt-4 p-4 bg-yellow-500/10 border border-yellow-500 rounded-md">
              <FiAlertCircle className="text-yellow-400 text-xl" />
              <p className="text-yellow-300 font-medium">Your wallet is empty. Fund now to get started.</p>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <FiAlertCircle className="text-yellow-400 text-xl animate-pulse" />
          <p className="text-yellow-400">{status}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-6">
        <Link to="/fund-wallet">
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium transition">
            Fund Wallet
          </button>
        </Link>

        <Link to="/transactions">
          <button className="border border-gray-500 hover:bg-gray-700 px-5 py-2 rounded-md font-medium transition">
            Transaction History
          </button>
        </Link>

        <button
          disabled
          className="border border-red-500 text-red-400 hover:bg-red-700 hover:text-white px-5 py-2 rounded-md font-medium transition cursor-not-allowed"
          title="Withdraw functionality coming soon"
        >
          Withdraw
        </button>
      </div>
    </div>
  </div>
</>

); };

export default WalletPage;

          
