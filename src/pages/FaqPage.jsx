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
  {
    question: "What payment methods does Dealcross support?",
    answer: "You can fund your wallet using bank transfer, card payment, Bitcoin, or USDT (crypto). More options will be added soon.",
  },
  {
    question: "How are disputes handled?",
    answer: "If there's a disagreement, either party can raise a dispute. Our team will review the case and make a fair resolution based on provided evidence.",
  },
  {
    question: "What is the escrow fee?",
    answer: "A small escrow fee is deducted from the total amount depending on the deal type. Fees are transparently shown before confirming your transaction.",
  },
  {
    question: "Can I trade crypto or shares on Dealcross?",
    answer: "Yes! You can buy/sell Bitcoin, USDT, and also participate in share trading through verified investor deals.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We use end-to-end encryption and do not share your personal or financial data with third parties.",
  },
  {
    question: "Can businesses use Dealcross?",
    answer: "Yes. Businesses can register as sellers or buyers, initiate bulk transactions, and enjoy premium features like investor dashboards and detailed analytics.",
  },
  {
    question: "How can I contact support?",
    answer: "Visit the Contact page or use the in-app chat support. You can also email support@dealcross.com for assistance.",
  },
  {
    question: "Is there a mobile app for Dealcross?",
    answer: "Yes, our mobile app is launching soon for Android and iOS. You’ll be able to manage deals and wallets on the go.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium"
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
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
