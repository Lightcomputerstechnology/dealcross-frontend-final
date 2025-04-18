// src/components/ContactSection.jsx
import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Get in touch
        </h2>
        <form className="grid gap-6 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            placeholder="Message"
            className="sm:col-span-2 w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
