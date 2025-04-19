// src/pages/BlogDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
  1: {
    title: 'Why Dealcross Is Changing Online Transactions',
    content: `Dealcross uses escrow to protect users from fraud and scams. When you start a deal, your payment is held securely until the transaction is completed by both parties. This gives confidence and transparency to buyers and sellers globally...`,
    date: 'April 19, 2025',
  },
  2: {
    title: 'Tips for First-Time Share Traders on Dealcross',
    content: `Trading shares on Dealcross is simple. First, verify your profile as an investor. Then browse through available shares, assess their risk levels, and proceed to buy or sell using our safe escrow system...`,
    date: 'April 15, 2025',
  },
};

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) return <div className="p-10 text-center">Blog post not found.</div>;

  return (
    <main className="max-w-3xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{post.date}</p>
      <article className="prose dark:prose-invert max-w-none">{post.content}</article>
    </main>
  );
}
