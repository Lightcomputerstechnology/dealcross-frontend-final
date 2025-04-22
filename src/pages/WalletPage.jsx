import React, { useEffect, useState } from 'react'; import { Helmet } from 'react-helmet'; import { Link } from 'react-router-dom'; import { getWalletBalance } from '@/api'; import { toast } from 'react-hot-toast'; import useAuthRedirect from '@/hooks/useAuthRedirect'; import { FiAlertCircle } from 'react-icons/fi';

const WalletPage = () => { useAuthRedirect();

const [balance, setBalance] = useState(null); const [status, setStatus] = useState('Loading...');

useEffect(() => { const fetchWallet = async () => { try { const data = await getWalletBalance(); setBalance(data.balance); setStatus(null); } catch (err) { const msg = err.message || 'Unable to fetch wallet balance.'; setStatus(msg); toast.error(msg); } };

fetchWallet();

}, []);

return ( <> <Helmet> <title>Wallet - Dealcross</title> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 py-10">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left animate-fade-in">Wallet</h2>

    <div className="bg-[#1e293b] p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 animate-fade-in">
      {balance !== null ? (
        <>
          <p className="text-sm text-gray-400">Available Balance</p>
          <h1 className="text-3xl sm:text-4xl font-bold">USD {balance.toFixed(2)}</h1>
          {balance === 0 && (
            <div className="flex items-center gap-2 mt-4 p-4 bg-yellow-500/10 border border-yellow-500 rounded-md">
              <FiAlertCircle className="text-yellow-400 text-xl" />
              <p className="text-yellow-300 font-medium text-sm sm:text-base">
                Your wallet is empty. Fund now to get started.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <FiAlertCircle className="text-yellow-400 text-xl animate-pulse" />
          <p className="text-yellow-400 text-sm sm:text-base">{status}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6">
        <Link to="/fund-wallet">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 px-5 py-2 rounded-md font-medium transition-all duration-300">
            Fund Wallet
          </button>
        </Link>

        <Link to="/transactions">
          <button className="w-full sm:w-auto border border-gray-500 hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 px-5 py-2 rounded-md font-medium transition-all duration-300">
            Transaction History
          </button>
        </Link>

        <button
          disabled
          className="w-full sm:w-auto border border-red-500 text-red-400 hover:bg-red-700 hover:text-white focus:ring-2 focus:ring-red-400 px-5 py-2 rounded-md font-medium transition-all duration-300 cursor-not-allowed"
          title="Withdraw functionality coming soon"
        >
          Withdraw
        </button>
      </div>
    </div>

    <style>{`
      .animate-fade-in {
        animation: fadeIn 0.8s ease-in-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </div>
</>

); };

export default WalletPage;

        
