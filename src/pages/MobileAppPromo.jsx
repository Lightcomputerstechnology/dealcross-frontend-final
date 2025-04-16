import React from 'react';

const MobileAppPromo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Get the Dealcross Mobile App</h1>
      <p className="text-center max-w-xl mb-6">
        Experience secure transactions, escrow management, and investment features on the go.
        Our mobile app is designed to give you full control and flexibility wherever you are.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Download for Android
        </a>
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Download for iOS
        </a>
      </div>
    </div>
  );
};

export default MobileAppPromo;
