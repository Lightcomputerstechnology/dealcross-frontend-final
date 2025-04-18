// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <main className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full border px-3 py-2 rounded"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Send message
        </button>
      </form>
    </main>
  );
}
