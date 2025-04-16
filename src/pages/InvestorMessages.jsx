import React from 'react';

const messages = [
  {
    id: 1,
    sender: 'Admin',
    subject: 'Welcome to Dealcross',
    content: 'Thank you for joining Dealcross. We are excited to have you on board!',
    date: '2025-04-15',
  },
  {
    id: 2,
    sender: 'Support',
    subject: 'KYC Verification Complete',
    content: 'Your identity verification is now complete. You may proceed with trading.',
    date: '2025-04-14',
  },
  {
    id: 3,
    sender: 'Dealcross Team',
    subject: 'Investment Tip',
    content: 'Diversify your shares across multiple sectors to reduce risk.',
    date: '2025-04-13',
  },
];

const InvestorMessages = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Investor Messages</h1>
      <div className="space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{msg.subject}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">From: {msg.sender} | Date: {msg.date}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorMessages;
