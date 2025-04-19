// src/pages/FaqPage.jsx
import React, { useState } from 'react';

const faqList = [
  {
    question: "What is Dealcross?",
    answer: "Dealcross is a secure online escrow platform that ensures safe transactions between buyers and sellers. We hold the buyer's payment until both parties are satisfied with the transaction.",
  },
  {
    question: "How do I start a deal on Dealcross?",
    answer: "To start a deal, log in, go to 'Start Deal', fill in the transaction details, invite the counterparty, and fund the deal using your wallet.",
  },
  // ...rest unchanged
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition font-medium"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
