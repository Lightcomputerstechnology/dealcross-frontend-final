import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuthRedirect from '@/hooks/useAuthRedirect';

const StartDealPairing = () => {
  useAuthRedirect(); // Enforce authentication

  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handlePairing = (e) => {
    e.preventDefault();
    if (email) {
      setConfirmed(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Pair a Deal - Dealcross</title>
        <meta name="description" content="Pair your deal with a buyer or seller by entering their email or user ID." />
        <meta name="keywords" content="deal pairing, escrow, connect user, dealcross" />
        <meta name="author" content="Dealcross Team" />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Start a Deal - Pair with a Buyer/Seller
          </h2>

          {!confirmed ? (
            <form onSubmit={handlePairing} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Counterparty Email or ID:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email or user ID"
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
              >
                Send Pairing Request
              </button>
            </form>
          ) : (
            <p className="text-center text-green-500 mt-6">
              Pairing request sent to <strong>{email}</strong>!
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default StartDealPairing;
