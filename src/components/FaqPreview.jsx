// src/components/FaqPreview.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Dealcross?",
    answer: "Dealcross is a secure online escrow platform for safe transactions, protecting both buyers and sellers.",
  },
  {
    question: "How does the escrow system work?",
    answer: "The buyer funds a deal. The seller delivers the goods or services. Once confirmed, funds are released to the seller.",
  },
  {
    question: "Is Dealcross free to use?",
    answer: "Creating an account is free. A small escrow fee applies to completed deals.",
  },
  {
    question: "What types of deals are supported?",
    answer: "Dealcross supports goods, services, freelance work, rentals, and more.",
  },
];

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
    </section>
  );
}
