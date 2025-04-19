// src/components/BlogPreviewList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Why Dealcross Is Changing Online Transactions',
    summary: 'Discover how Dealcross is transforming escrow-based payments with advanced security and simplicity.',
    date: 'April 19, 2025',
  },
  {
    id: 2,
    title: 'Tips for First-Time Share Traders on Dealcross',
    summary: 'New to investing on Dealcross? These 5 beginner tips will help you trade with confidence.',
    date: 'April 15, 2025',
  },
];

export default function BlogPreviewList() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Latest News & Insights</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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
    </section>
  );
}
