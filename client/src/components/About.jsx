import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { info} from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { avatar } from "../assets";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-2">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled software developer with experience in PHP and
            JavaScript, and expertise in frameworks like React, Node.js,
            WordPress, and Laravel. I'm a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's work together to
            bring your ideas to life!
          </motion.p>
        </div>

        <motion.div 
           variants={slideIn("right", "tween", 0.2, 1)}
        className="mt-6 md:mt-0 md:ml-6 md:w-1/2 flex justify-center">
          <img
            src={avatar}
            alt={info.personalInfo.name}
            className="w-full h-auto max-w-sm rounded-lg shadow-lg"
          />
        </motion.div >
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
