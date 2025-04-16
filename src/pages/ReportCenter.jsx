import React from 'react';

const ReportCenter = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Report Center</h1>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
          Use the form below to report suspicious activity, raise disputes, or provide general feedback.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-black dark:text-white"
              placeholder="e.g. Dispute with Seller #A0923"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-black dark:text-white"
              placeholder="Describe your issue in detail..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportCenter;
