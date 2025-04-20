// File: src/pages/DealDetailsPage.jsx import React, { useEffect, useState } from 'react'; import { useParams } from 'react-router-dom'; import { Helmet } from 'react-helmet'; import DealChatRoom from '@/components/DealChatRoom'; import axios from 'axios';

export default function DealDetailsPage() { const { dealId } = useParams(); const [deal, setDeal] = useState(null); const [loading, setLoading] = useState(true);

useEffect(() => { const fetchDeal = async () => { try { const token = localStorage.getItem('token'); const res = await axios.get(https://d-final.onrender.com/deals/${dealId}, { headers: { Authorization: Bearer ${token} }, }); setDeal(res.data); } catch (err) { console.error('Error fetching deal:', err); } finally { setLoading(false); } };

fetchDeal();

}, [dealId]);

if (loading) { return <div className="min-h-screen flex items-center justify-center text-white">Loading deal...</div>; }

if (!deal) { return <div className="min-h-screen flex items-center justify-center text-red-400">Deal not found.</div>; }

return ( <main className="max-w-4xl mx-auto py-10 px-6 text-gray-900 dark:text-white"> <Helmet> <title>Deal #{deal.id} - Dealcross Details</title> <meta name="description" content={Detailed view of escrow deal #${deal.id} between ${deal.buyer} and ${deal.seller}. Status: ${deal.status}.} /> </Helmet>

<h1 className="text-3xl font-bold mb-6">Deal #{deal.id}</h1>

  <section className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8 shadow">
    <h2 className="text-xl font-semibold mb-3">Escrow Deal Details</h2>
    <p className="mb-1"><strong>Title:</strong> {deal.title}</p>
    <p className="mb-1"><strong>Amount:</strong> ${deal.amount}</p>
    <p className="mb-1"><strong>Status:</strong> {deal.status}</p>
    <p className="mb-1"><strong>Buyer:</strong> {deal.buyer}</p>
    <p className="mb-1"><strong>Seller:</strong> {deal.seller}</p>
    {deal.expected_completion && (
      <p className="mb-1 text-yellow-500">
        <strong>Expected Completion:</strong> {deal.expected_completion}
      </p>
    )}
    {deal.message && (
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        <strong>Message:</strong> {deal.message}
      </p>
    )}
  </section>

  <section>
    <h2 className="text-xl font-semibold mb-4">Live Chat with Counterparty</h2>
    <DealChatRoom dealId={dealId} />
  </section>
</main>

); }

  
