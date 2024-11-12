import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blog.slug}`);
  };

  return (
    <a
      className="group flex flex-col focus:outline-none cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          src={blog.image}
          alt="Blog Image"
        />
        {blog.tags.map((tag) => (
          <span
            key={tag.name}
            className={`absolute top-0 right-0 rounded-bl-xl py-1.5 px-3 text-xs font-medium ${tag.color}`}
          >
            {tag.name}
          </span>
        ))}
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300">
          {blog.title}
        </h3>
        {blog.content && (
          <p className="mt-3 text-gray-800 dark:text-neutral-200">
            {blog.content.split(" ").slice(0, 30).join(" ")}...
          </p>
        )}
        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium dark:text-blue-500">
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
    </a>
  );
};

export default BlogCard;