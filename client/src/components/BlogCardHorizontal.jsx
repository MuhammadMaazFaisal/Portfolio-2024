import React from "react";
import { useNavigate } from "react-router-dom";
import BlogImage from "./BlogImage";
import BlogTitle from "./BlogTitle";
import BlogContentPreview from "./BlogContentPreview";
import ReadMoreLink from "./ReadMoreLink";

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
          <BlogImage src={blog.image} alt="Blog Image" />
        </div>

        <div className="grow">
          <BlogTitle title={blog.title} />
          <BlogContentPreview content={blog.content} />
          <ReadMoreLink />
        </div>
      </div>
    </a>
  );
};

export default BlogCardHorizontal;