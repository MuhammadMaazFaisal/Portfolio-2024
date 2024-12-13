import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { avatar } from "../assets";
import { SectionText } from './TextComponents';
import { MotionDiv, MotionParagraph, MotionImage } from './MotionComponents';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-2">
        <MotionDiv variant="textVariant">
          <SectionText variant="subText">Introduction</SectionText>
          <SectionText variant="headText">Overview.</SectionText>
        </MotionDiv>

        <MotionParagraph
          variant="fadeIn"
          variantProps={["", "", 0.1, 1]}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in PHP and
          JavaScript, and expertise in frameworks like React, Node.js,
          WordPress, and Laravel. I'm a quick learner and collaborate closely
          with clients to create efficient, scalable, and user-friendly
          solutions that solve real-world problems. Let's work together to
          bring your ideas to life!
        </MotionParagraph>
      </div>

      <MotionDiv
        variant="fadeIn"
        variantProps={["right", "spring", 0.5, 0.75]}
        className="flex-1 mt-10 md:mt-0"
      >
        <MotionImage
          src={avatar}
          alt="avatar"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </MotionDiv>
    </section>
  );
};

export default SectionWrapper(About, "about");