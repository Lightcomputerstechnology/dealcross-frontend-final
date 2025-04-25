import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UpgradePlanPage = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitting, setSubmitting] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(true);

  const fetchPlans = async () => {
    setLoadingPlans(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('https://d-final.onrender.com/admin/subscription-plans', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPlans(res.data.data || []);
    } catch (err) {
      toast.error('Failed to load subscription plans.');
    } finally {
      setLoadingPlans(false);
    }
  };

  const handleUpgrade = async () => {
    if (!selectedPlan) {
      toast.error('Please select a plan.');
      return;
    }
    setSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `https://d-final.onrender.com/subscriptions/upgrade`,
        { plan_id: selectedPlan.id, payment_method: paymentMethod },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message || 'Upgrade successful!');
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Upgrade failed.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <>
      <Helmet>
        <title>Upgrade Plan - Dealcross</title>
      </Helmet>
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold">Upgrade Your Plan</h1>

        {loadingPlans ? (
          <p className="text-yellow-400">Loading plans...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg p-6 cursor-pointer ${
                  selectedPlan?.id === plan.id ? 'border-blue-500' : 'border-gray-600'
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-gray-400 mb-4">${plan.price} / {plan.duration} days</p>
                <p className="text-sm text-gray-300">{plan.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Payment Method */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm">Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="card">Card (Stripe)</option>
            <option value="flutterwave">Flutterwave</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="usdt">USDT (Tether)</option>
          </select>
        </div>

        {/* Upgrade Button */}
        <button
          onClick={handleUpgrade}
          disabled={submitting}
          className={`px-6 py-2 rounded font-semibold transition ${
            submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {submitting ? 'Processing...' : `Upgrade Now`}
        </button>

        <Link to="/" className="text-blue-400 text-sm underline">
          Back to Dashboard
        </Link>
      </div>
    </>
  );
};

export default UpgradePlanPage;