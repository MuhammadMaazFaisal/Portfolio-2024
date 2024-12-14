import React from 'react';

const BlogTitle = ({ title }) => {
  return (
    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300">
      {title}
    </h3>
  );
};

export default BlogTitle;