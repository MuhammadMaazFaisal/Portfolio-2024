import React from 'react';

const BlogContentPreview = ({ content }) => {
  return (
    <p className="mt-3 text-gray-600 dark:text-neutral-400">
      {content.split(" ").slice(0, 30).join(" ")}...
    </p>
  );
};

export default BlogContentPreview;