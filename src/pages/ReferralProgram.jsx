import React from 'react';

const ReferralProgram = () => {
  const referralLink = "https://dealcross.com/ref/yourusername";

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Referral Program</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-2">Your Referral Link</h2>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-4">
          <code className="text-sm break-all">{referralLink}</code>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(referralLink)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Copy Link
        </button>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-2">How It Works</h2>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
          <li>Share your referral link with friends and followers.</li>
          <li>They sign up and complete at least one verified transaction.</li>
          <li>You both earn a reward into your wallet.</li>
        </ul>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-2">Referral Stats</h2>
        <ul className="text-sm text-gray-600 dark:text-gray-300">
          <li>Total Referred: 18</li>
          <li>Active Users: 12</li>
          <li>Rewards Earned: $36.00</li>
        </ul>
      </div>
    </div>
  );
};

export default ReferralProgram;
