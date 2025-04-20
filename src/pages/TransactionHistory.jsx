import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet'; import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';

const TransactionHistory = () => { const [transactions, setTransactions] = useState([]); const [status, setStatus] = useState('Loading...');

useEffect(() => { const fetchTransactions = async () => { const token = localStorage.getItem('token'); if (!token) { setStatus('Please log in to view your transactions.'); return; }

try {
    const response = await axios.get('https://d-final.onrender.com/wallet/transactions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.length === 0) {
      setStatus('No transactions yet.');
    } else {
      setTransactions(response.data);
      setStatus(null);
    }
  } catch (error) {
    setStatus('Failed to load transactions.');
  }
};

fetchTransactions();

}, []);

const getIcon = (type) => { if (type.toLowerCase().includes('deposit') || type.toLowerCase().includes('fund')) { return <FaArrowDown className="text-green-400 mr-2" />; } else if (type.toLowerCase().includes('withdraw')) { return <FaArrowUp className="text-red-400 mr-2" />; } else { return <FaExchangeAlt className="text-yellow-400 mr-2" />; } };

return ( <> <Helmet> <title>Transaction History - Dealcross</title> <meta name="description" content="View your transaction history including deposits, withdrawals, and escrow-related activities on Dealcross." /> <meta name="keywords" content="dealcross, transaction history, escrow, wallet, finance, crypto, payment logs" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
    <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
    {status && <p className="text-yellow-400 mb-6">{status}</p>}

    <div className="space-y-4">
      {transactions.map((txn, index) => (
        <div
          key={index}
          className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between items-center"
        >
          <div className="flex items-center">
            {getIcon(txn.type)}
            <div>
              <h4 className="font-semibold">{txn.type}</h4>
              <p className="text-sm text-gray-400">{new Date(txn.date).toLocaleString()}</p>
            </div>
          </div>
          <div className="text-right">
            <p
              className={`text-lg font-bold ${
                txn.amount >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {txn.amount >= 0 ? '+' : '-'}${Math.abs(txn.amount).toFixed(2)}
            </p>
            <p className="text-sm text-gray-400">{txn.status}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

); };

export default TransactionHistory;

                
