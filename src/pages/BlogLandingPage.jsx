import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '@/data/blogPosts';
import { Helmet } from 'react-helmet';

export default function BlogLandingPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Blog - Dealcross Insights & News</title>
        <meta name="description" content="Stay informed with financial tips, platform updates, and expert articles from the Dealcross blog." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">Dealcross Blog</h1>

      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map(post => (
              <div key={post.slug} className="border p-4 rounded-lg shadow bg-yellow-100 dark:bg-yellow-800">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="mb-2">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-blue-500 underline">Read More</Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">All Posts</h2>
        <div className="grid gap-4">
          {otherPosts.map(post => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="block p-4 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <h3 className="text-lg font-medium">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
