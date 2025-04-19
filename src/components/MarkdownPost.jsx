import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPost = ({ filename }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/src/posts/${filename}`)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => {
        setContent('Failed to load post.');
        console.error(err);
      });
  }, [filename]);

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-10">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPost;
