// BlogCardHorizontal.js
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCardHorizontal = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blog.slug}`);
  };

  return (
    <a
      className="group block rounded-xl overflow-hidden focus:outline-none cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out absolute inset-0 w-full h-full object-cover rounded-xl"
            src={blog.image}
            alt="Blog Image"
          />
        </div>

        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300">
            {blog.title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
          {blog.content.split(" ").slice(0, 30).join(" ")}...
          </p>
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
        </div>
      </div>
    </a>
  );
};

export default BlogCardHorizontal;
