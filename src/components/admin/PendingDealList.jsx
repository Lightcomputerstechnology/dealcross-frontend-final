import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const PendingDealList = () => {
  const [pendingDeals, setPendingDeals] = useState([]);
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPendingDeals = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('https://d-final.onrender.com/admin/pending-deals', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingDeals(res.data);
    } catch (err) {
      toast.error('Failed to fetch pending deals');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingDeals();
    const interval = setInterval(fetchPendingDeals, 20000); // refresh every 20s
    return () => clearInterval(interval);
  }, []);

  const handleAction = async (dealId, action) => {
    const token = localStorage.getItem('token');
    const note = notes[dealId] || '';
    try {
      await axios.post(
        `https://d-final.onrender.com/admin/deals/${dealId}/${action}`,
        { note },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(`Deal ${action === 'approve' ? 'approved' : 'rejected'} successfully`);
      fetchPendingDeals();
    } catch (err) {
      toast.error(`Failed to ${action} deal`);
    }
  };

  return (
    <div className="space-y-4">
      {loading ? (
        <p className="text-yellow-400">Loading pending deals...</p>
      ) : pendingDeals.length > 0 ? (
        pendingDeals.map((deal) => (
          <div
            key={deal.id}
            className="bg-gray-800 p-4 rounded shadow border border-gray-700 space-y-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{deal.title}</h4>
                <p className="text-sm text-gray-400">
                  Amount: ${deal.amount} | Category: {deal.category}
                </p>
                <p className="text-sm text-gray-400">
                  Buyer: {deal.buyer_email} | Seller: {deal.seller_email}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAction(deal.id, 'approve')}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(deal.id, 'reject')}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                >
                  Reject
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Approval/Reject Note (optional)"
              value={notes[deal.id] || ''}
              onChange={(e) =>
                setNotes((prev) => ({ ...prev, [deal.id]: e.target.value }))
              }
              className="w-full mt-2 px-3 py-1 rounded bg-gray-900 border border-gray-600 text-white text-sm"
            />
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-sm">No pending deals at the moment.</p>
      )}
    </div>
  );
};

export default PendingDealList;
    
