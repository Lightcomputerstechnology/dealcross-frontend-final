// src/pages/BlogListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { title: 'Why Dealcross Beats Other Platforms', path: '/why-dealcross' },
  { title: 'Understanding Dispute Resolution on Dealcross', path: '/dispute-guide' },
  { title: 'Fast Payouts on Dealcross', path: '/fast-payouts' },
  { title: 'Why Dealcross Is Changing Online Transactions', path: '/intro-to-dealcross' },
  { title: 'Tips for First-Time Share Traders on Dealcross', path: '/share-trading-tips' },
];

export default function BlogListPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <ul className="space-y-4">
        {blogPosts.map((post, index) => (
          <li key={index}>
            <Link
              to={post.path}
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
