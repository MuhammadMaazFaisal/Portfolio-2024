import React from 'react';

const BlogImage = ({ src, alt, className }) => {
  return (
    <img
      className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl ${className}`}
      src={src}
      loading="lazy"
      alt={alt}
    />
  );
};

export default BlogImage;