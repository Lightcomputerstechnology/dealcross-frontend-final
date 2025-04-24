// File: src/pages/ConfirmPairingPage.jsx

import React, { useEffect, useState } from 'react'; import { Helmet } from 'react-helmet'; import { getPendingPairings, confirmPairing } from '@/api'; import { toast } from 'react-hot-toast'; import useAuthRedirect from '@/hooks/useAuthRedirect';

const ConfirmPairingPage = () => { useAuthRedirect(); const [pairings, setPairings] = useState([]); const [loading, setLoading] = useState(true);

useEffect(() => { const fetchPairings = async () => { try { const data = await getPendingPairings(); setPairings(data); } catch (err) { toast.error(err.message || 'Error loading pairings.'); } finally { setLoading(false); } }; fetchPairings(); }, []);

const handleConfirm = async (pairingId) => { try { await confirmPairing(pairingId); toast.success('Pairing confirmed!'); setPairings(pairings.filter((p) => p.id !== pairingId)); } catch (err) { toast.error(err.message || 'Error confirming pairing.'); } };

return ( <> <Helmet><title>Confirm Pairing - Dealcross</title></Helmet> <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10"> <div className="max-w-3xl mx-auto"> <h1 className="text-2xl font-bold mb-6 text-center">Pending Pairings</h1> {loading ? ( <p className="text-center text-yellow-400">Loading pairings...</p> ) : pairings.length === 0 ? ( <p className="text-center text-gray-400">No pending pairings found.</p> ) : ( <div className="space-y-4"> {pairings.map((pairing) => ( <div key={pairing.id} className="p-4 bg-gray-800 rounded shadow"> <p className="text-sm">Creator ID: {pairing.creator_id}</p> <p className="text-sm">Pairing ID: {pairing.id}</p> <button onClick={() => handleConfirm(pairing.id)} className="mt-2 bg-green-600 hover:bg-green-700 px-4 py-1 rounded" > Confirm Pairing </button> </div> ))} </div> )} </div> </div> </> ); };

export default ConfirmPairingPage;

