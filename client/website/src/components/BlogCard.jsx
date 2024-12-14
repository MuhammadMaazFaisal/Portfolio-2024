import React from "react";
import { useNavigate } from "react-router-dom";
import BlogImage from "./BlogImage";
import BlogTitle from "./BlogTitle";
import BlogContentPreview from "./BlogContentPreview";
import ReadMoreLink from "./ReadMoreLink";

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
        <BlogImage src={blog.image} alt="Blog Image" />
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
        <BlogTitle title={blog.title} />
        {blog.content && <BlogContentPreview content={blog.content} />}
        <ReadMoreLink />
      </div>
    </a>
  );
};

export default BlogCard;