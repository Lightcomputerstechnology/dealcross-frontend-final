import React, { useEffect, useState } from 'react'; import { Helmet } from 'react-helmet'; import { getMyDeals } from '@/api'; import { toast } from 'react-hot-toast'; import useAuthRedirect from '@/hooks/useAuthRedirect'; import { FiFolderPlus } from 'react-icons/fi';

const DealsPage = () => { useAuthRedirect();

const [deals, setDeals] = useState([]); const [loading, setLoading] = useState(true);

useEffect(() => { const fetchDeals = async () => { try { const data = await getMyDeals(); setDeals(data || []); } catch (error) { toast.error(error.message || 'Error fetching deals.'); } finally { setLoading(false); } };

fetchDeals();

}, []);

return ( <> <Helmet> <title>My Deals - Dealcross</title> </Helmet>

<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-6 py-10">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left animate-fade-in">My Deals</h1>

      {loading ? (
        <p className="text-lg animate-pulse text-center text-yellow-400">Loading deals...</p>
      ) : deals.length === 0 ? (
        <div className="text-center py-10 space-y-4 animate-fade-in">
          <FiFolderPlus className="mx-auto text-5xl text-blue-500" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No active deals found. Start a new one to secure your transactions.
          </p>
          <a
            href="/start-deal"
            className="inline-block bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 text-white px-5 py-2 rounded-md font-medium transition-all duration-300"
          >
            Start a Deal
          </a>
        </div>
      ) : (
        <div className="grid gap-4 animate-fade-in">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="p-4 sm:p-5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                <h2 className="text-lg font-semibold">{deal.title}</h2>
                <span className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md capitalize w-max">
                  {deal.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Role: <span className="capitalize">{deal.role}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Amount: <span className="font-medium">${Number(deal.amount).toFixed(2)}</span>
              </p>
            </div>
          ))}
        </div>
      )}
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

export default DealsPage;

