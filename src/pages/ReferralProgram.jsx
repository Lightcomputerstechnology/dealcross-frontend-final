// src/pages/ReferralProgram.jsx
import React from 'react';

const ReferralProgram = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Referral Program</h1>
        <p className="mb-6 text-lg">
          Invite your friends and earn rewards! Our referral program is simple:
        </p>

        <ul className="text-left list-disc list-inside space-y-3 text-base">
          <li>Share your unique referral link with others.</li>
          <li>Earn commission or bonus points for every new user that signs up and completes a transaction.</li>
          <li>Track your referral stats in your dashboard.</li>
        </ul>

        <div className="mt-8 p-4 bg-slate-800 rounded-lg">
          <p className="text-md text-slate-300">Your Referral Link:</p>
          <div className="bg-slate-700 p-2 mt-2 rounded text-sm font-mono">
            https://dealcross.com/signup?ref=yourusername
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Please avoid spam. Violations may lead to disqualification from the program.
        </p>
      </div>
    </div>
  );
};

export default ReferralProgram;
