import React from "react";
import { motion } from "framer-motion";
import { blogs } from "../constants";
import BlogCard from "./BlogCard";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { SectionText } from './TextComponents';
import { MotionDiv } from './MotionComponents';

const Blogs = () => {
  return (
    <>
      <MotionDiv
        variant="textVariant"
        className="max-w-2xl mx-auto text-center mb-10 lg:mb-14"
      >
        <SectionText variant="headText">From My Journal</SectionText>
        <SectionText variant="subText" classNames="mt-1 text-gray-600 dark:text-neutral-400">
          I'd love to share my thoughts, experiences, and stories with you.
        </SectionText>
      </MotionDiv>

      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
        <a
          className="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1646315026057-1304d4a771c6?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition"
          href="/blogs"
        >
          <div className="flex-auto p-4 md:p-6">
            <h3 className="text-xl text-white/90 group-hover:text-white">
            Join me on my journey and explore the topics I'm passionate about.
            </h3>
          </div>
          <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
              Visit My Journal
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "my-journal");
