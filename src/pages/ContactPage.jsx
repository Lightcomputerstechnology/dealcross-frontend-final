// src/pages/ContactPage.jsx
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
