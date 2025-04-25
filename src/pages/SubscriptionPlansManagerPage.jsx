import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { FiRefreshCw, FiEdit3, FiPlus } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const SubscriptionPlansManagerPage = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null); // null = Add, else Edit
  const [form, setForm] = useState({ name: '', description: '', price: '', duration: '' });

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://d-final.onrender.com/admin/subscription-plans', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setPlans(response.data.data || []);
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Failed to fetch subscription plans.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (editingPlan) {
        // Edit Plan
        await axios.patch(`https://d-final.onrender.com/admin/subscription-plans/${editingPlan.id}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success('Plan updated successfully!');
      } else {
        // Add Plan
        await axios.post('https://d-final.onrender.com/admin/subscription-plans', form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success('Plan added successfully!');
      }
      setShowModal(false);
      setForm({ name: '', description: '', price: '', duration: '' });
      setEditingPlan(null);
      fetchPlans();
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Operation failed.');
    }
  };

  const openAddModal = () => {
    setForm({ name: '', description: '', price: '', duration: '' });
    setEditingPlan(null);
    setShowModal(true);
  };

  const openEditModal = (plan) => {
    setForm({
      name: plan.name,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
    });
    setEditingPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <Helmet>
        <title>Subscription Plans - Admin | Dealcross</title>
        <meta name="description" content="Manage subscription plans for Dealcross users, including pricing and benefits." />
      </Helmet>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Subscription Plans Manager</h2>
        <div className="flex gap-2">
          <button onClick={fetchPlans} className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            <FiRefreshCw /> Refresh
          </button>
          <button onClick={openAddModal} className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded hover:bg-green-700">
            <FiPlus /> Add Plan
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-yellow-400">Loading plans...</p>
      ) : plans.length === 0 ? (
        <p className="text-gray-400">No subscription plans available.</p>
      ) : (
        <div className="space-y-4">
          {plans.map((plan, idx) => (
            <div key={idx} className="bg-[#1e293b] p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{plan.name}</p>
                <p className="text-sm text-gray-400">{plan.description}</p>
                <p className="text-green-400 font-bold mt-2">${plan.price} / {plan.duration} days</p>
              </div>
              <button
                onClick={() => openEditModal(plan)}
                className="flex items-center gap-1 bg-yellow-500 px-3 py-1 rounded text-sm hover:bg-yellow-600"
              >
                <FiEdit3 /> Edit
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <form onSubmit={handleSubmit} className="bg-[#1e293b] p-6 rounded-lg shadow max-w-md w-full space-y-4">
            <h3 className="text-xl font-bold">{editingPlan ? 'Edit Plan' : 'Add Plan'}</h3>

            <input
              type="text"
              placeholder="Plan Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
              rows="3"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />
            <input
              type="number"
              placeholder="Price (USD)"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />
            <input
              type="number"
              placeholder="Duration (days)"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              >
                {editingPlan ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlansManagerPage;