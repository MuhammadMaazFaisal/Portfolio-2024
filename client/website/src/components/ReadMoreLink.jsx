import React from 'react';

const ReadMoreLink = () => {
  return (
    <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium dark:text-blue-500">
      Read more
      <svg
        className="w-4 h-4"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </p>
  );
};

export default ReadMoreLink;