import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import blogPosts from '@/data/blogPosts';

export default function BlogLandingPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Blog - Dealcross Insights & News</title>
        <meta
          name="description"
          content="Stay informed with financial tips, platform updates, and expert articles from the Dealcross blog."
        />
      </Helmet>

      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Dealcross Blog
      </motion.h1>

      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                className="border p-4 rounded-lg shadow bg-yellow-100 dark:bg-yellow-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                  {post.date && <span>{new Date(post.date).toLocaleDateString()}</span>}
                  {post.category && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white rounded">
                      {post.category}
                    </span>
                  )}
                </div>
                <Link to={`/blog/${post.slug}`} className="text-blue-500 underline">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">All Posts</h2>
        <div className="grid gap-4">
          {otherPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block p-4 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <h3 className="text-lg font-medium">{post.title}</h3>
                <div className="text-xs text-gray-500 mt-1">
                  {post.date && new Date(post.date).toLocaleDateString()}
                  {post.category && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white rounded">
                      {post.category}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
      }
