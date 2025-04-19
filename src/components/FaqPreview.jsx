// src/components/FaqPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const faqPreviewList = [
  {
    question: "What is Dealcross?",
    answer: "Dealcross is a secure online escrow platform for safe transactions.",
  },
  {
    question: "How do I start a deal?",
    answer: "Register, log in, and go to Start Deal to begin your transaction.",
  },
  {
    question: "Is my money safe?",
    answer: "Yes, funds are held securely until both parties fulfill the agreement.",
  },
];

export default function FaqPreview() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
        <div className="space-y-6">
          {faqPreviewList.map((faq, i) => (
            <div key={i} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/faq"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
