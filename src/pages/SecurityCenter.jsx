// src/pages/SecurityCenter.jsx
import React from 'react';

const SecurityCenter = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Security Center</h1>
        <p className="text-lg text-slate-300 mb-6 text-center">
          At Dealcross, your security is our top priority. We employ cutting-edge technology and practices to safeguard your assets.
        </p>

        <div className="space-y-6">
          <div className="bg-slate-800 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">End-to-End Encryption</h2>
            <p className="text-slate-400">
              All communications and transactions are encrypted using industry-standard SSL/TLS protocols.
            </p>
          </div>

          <div className="bg-slate-800 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Two-Factor Authentication (2FA)</h2>
            <p className="text-slate-400">
              Enable 2FA for an extra layer of protection on your account.
            </p>
          </div>

          <div className="bg-slate-800 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Escrow Protection</h2>
            <p className="text-slate-400">
              Every transaction is secured via our escrow system, holding funds until both parties fulfill their obligations.
            </p>
          </div>

          <div className="bg-slate-800 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Data Privacy</h2>
            <p className="text-slate-400">
              Your data is stored securely and is never shared with third parties without your explicit consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;
