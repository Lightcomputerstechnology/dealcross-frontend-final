// File: src/pages/PaymentStatusPage.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const PaymentStatusPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get('status') || 'unknown';

  const isSuccess = status === 'success';

  return (
    <>
      <Helmet>
        <title>{isSuccess ? 'Payment Successful' : 'Payment Failed'} - Dealcross</title>
      </Helmet>
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-center items-center px-4 space-y-6">
        {isSuccess ? (
          <>
            <FiCheckCircle className="text-green-500 text-6xl" />
            <h1 className="text-2xl font-bold">Payment Successful!</h1>
            <p className="text-gray-400">Your upgrade has been processed. Enjoy the benefits!</p>
          </>
        ) : (
          <>
            <FiXCircle className="text-red-500 text-6xl" />
            <h1 className="text-2xl font-bold">Payment Failed</h1>
            <p className="text-gray-400">Something went wrong. Please try again or contact support.</p>
          </>
        )}
        <Link to="/" className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">
          Back to Dashboard
        </Link>
      </div>
    </>
  );
};

export default PaymentStatusPage;