// src/pages/BlogListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1-intro-to-dealcross',
    title: 'Why Dealcross Is Changing Online Transactions',
    summary: 'Discover how Dealcross is transforming escrow-based payments with advanced security.',
    date: 'April 19, 2025',
  },
  {
    id: '2-share-trading-tips',
    title: 'Tips for First-Time Share Traders on Dealcross',
    summary: 'Start trading shares with confidence using these simple beginner tips.',
    date: 'April 15, 2025',
  },
  {
    id: '3-fast-payouts-explained',
    title: 'How Fast Payouts Work on Dealcross',
    summary: 'Learn how Dealcross makes fund transfers fast and efficient for users.',
    date: 'April 10, 2025',
  },
  {
    id: '4-dispute-resolution-guide',
    title: 'Understanding Disputes on Dealcross',
    summary: 'Step-by-step guide to resolving conflicts and protecting your funds.',
    date: 'April 5, 2025',
  },
  {
    id: '5-dealcross-vs-others',
    title: 'Why Dealcross Beats Other Platforms',
    summary: 'See why Dealcross stands out with multi-feature support.',
    date: 'April 1, 2025',
  },
];

export default function BlogListPage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">All Blog Articles</h1>
        <div className="grid sm:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
