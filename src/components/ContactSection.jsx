// src/components/ContactSection.jsx import React from 'react';

const ContactSection = () => { return ( <section className="bg-white dark:bg-gray-900 py-12 px-4"> <div className="max-w-5xl mx-auto"> <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"> Contact Us </h2>

<form className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows="4"
        className="w-full px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

); };

export default ContactSection;

