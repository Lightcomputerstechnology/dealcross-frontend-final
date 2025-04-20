import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Why Dealcross Beats Other Platforms',
    link: '/why-dealcross',
    summary: 'Discover what makes Dealcross more secure and scalable.',
    icon: '🛡️',
  },
  {
    title: 'Understanding Dispute Resolution on Dealcross',
    link: '/dispute-guide',
    summary: 'See how our dispute system protects both buyers and sellers.',
    icon: '⚖️',
  },
  {
    title: 'Fast Payouts on Dealcross',
    link: '/fast-payouts',
    summary: 'Learn how funds are released quickly after deal success.',
    icon: '⚡',
  },
];

const BlogPreviewList = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">From the Blog</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Link
              to={post.link}
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-5 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl mb-2">{post.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.summary}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewList;
