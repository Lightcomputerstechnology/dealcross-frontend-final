// src/pages/SecurityCenter.jsx
import React from 'react';

const SecurityCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Security Center</h1>
        <p className="mb-4 text-lg leading-relaxed">
          At Dealcross, your safety is our priority. Our platform is equipped with industry-grade security measures to ensure safe transactions, identity protection, and zero tolerance for fraud.
        </p>

        <ul className="list-disc ml-6 space-y-3 text-base">
          <li><strong>Escrow Protocol:</strong> All transactions are held securely until both parties confirm satisfaction.</li>
          <li><strong>Two-Factor Authentication:</strong> Added layer of security for account logins and wallet actions.</li>
          <li><strong>End-to-End Encryption:</strong> Your data and communication are always private and secure.</li>
          <li><strong>Fraud Monitoring:</strong> Our AI fraud detection engine scans all deals in real time.</li>
          <li><strong>Audit Logs:</strong> Complete activity tracking to ensure accountability.</li>
        </ul>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-300">Need help? Visit our <a href="/support" className="text-blue-400 underline">Support Center</a> or contact us.</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;
