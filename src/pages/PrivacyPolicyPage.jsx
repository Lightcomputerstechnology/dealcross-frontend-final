// src/pages/PrivacyPolicyPage.jsx
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
        <p>
          At Dealcross, your privacy is important to us. This Privacy Policy outlines how we collect,
          use, and protect your personal data when using our platform.
        </p>
        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <p>
          We collect personal information such as your name, email address, and payment details when
          you sign up or perform transactions on the platform.
        </p>
        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Data</h2>
        <p>
          We use your data to process transactions, provide support, improve our services, and comply
          with legal requirements.
        </p>
        <h2 className="text-xl font-semibold mt-6">3. Data Security</h2>
        <p>
          We implement strong security measures to protect your information from unauthorized access
          and ensure your data remains confidential.
        </p>
        <h2 className="text-xl font-semibold mt-6">4. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data. You may also contact us
          regarding any data privacy concerns.
        </p>
        <h2 className="text-xl font-semibold mt-6">5. Updates to This Policy</h2>
        <p>
          We may update this policy periodically. Any changes will be posted on this page with the
          updated effective date.
        </p>
        <p className="text-sm text-gray-400 mt-8">Effective Date: April 18, 2025</p>
      </div>
    </div>
  );
}
