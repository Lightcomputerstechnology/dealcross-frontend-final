// File: src/pages/AdminAnalyticsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import AdminCharts from '@/components/admin/AdminCharts';

const AdminAnalyticsPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin Analytics - Dealcross</title>
        <meta name="description" content="Analytics dashboard showing platform trends and charts for Dealcross admin." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-4 md:px-8 py-10">
        <h1 className="text-2xl font-bold mb-6">Admin Chart Analytics</h1>
        <div className="bg-gray-900 p-4 rounded-lg shadow">
          <AdminCharts />
        </div>
      </div>
    </>
  );
};

export default AdminAnalyticsPage;
