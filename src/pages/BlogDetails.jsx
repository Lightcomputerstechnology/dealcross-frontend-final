// src/pages/BlogDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogDetails() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../posts/${id}.md`)
      .then((res) => fetch(res.default).then((r) => r.text()).then(setContent))
      .catch(() => setContent('Blog post not found.'));
  }, [id]);

  return (
    <main className="max-w-3xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <ReactMarkdown className="prose dark:prose-invert max-w-none">{content}</ReactMarkdown>
    </main>
  );
}
