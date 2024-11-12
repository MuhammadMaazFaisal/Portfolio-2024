import React from "react";
import { blogs } from "../constants";
import BlogCardHorizontal from "./BlogCardHorizontal";
import { SectionWrapper } from "../hoc";

const BlogList = () => {
  return(
  <>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {blogs.map((blog) => (
          <BlogCardHorizontal key={blog.id} blog={blog} />
        ))}
      </div>
      {/* End Grid */}
    </div>
    
  </>
    
  );
};

export default SectionWrapper(BlogList, "");