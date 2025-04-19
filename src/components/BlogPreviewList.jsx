// src/components/BlogPreviewList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Why Dealcross Is Changing Online Transactions',
    summary: 'Learn how Dealcross ensures safety and transparency in online deals using escrow.',
    date: 'April 19, 2025',
  },
  {
    id: 2,
    title: 'Tips for First-Time Share Traders on Dealcross',
    summary: 'Simple steps to start trading shares securely on the platform.',
    date: 'April 15, 2025',
  },
];

export default function BlogPreviewList() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest News & Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <p className="mb-4">{post.summary}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:underline dark:text-blue-400"
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
