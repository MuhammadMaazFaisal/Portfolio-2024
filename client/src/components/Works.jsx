import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import "preline"; // Ensure Preline.js is imported

const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/[\s_-]+/g, "-") // Replace spaces with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

const ProjectCard = ({
  index,
  name,
  intro,
  tags,
  video,
  source_code_link,
  onClick,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const width = target.clientWidth;
    const height = target.clientHeight;
    const x = (offsetX / width) * 2 - 1; // Range from -1 to 1
    const y = (offsetY / height) * 2 - 1; // Range from -1 to 1
    setTilt({ x: x * 10, y: y * 10 }); // Adjust tilt intensity here
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={onClick}
      className="hs-tooltip relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer">
        <div className="relative w-full h-[230px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={video}
            alt="project_video"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] text-center">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] text-center">{intro}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      <span
        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
        role="tooltip"
      >
        Click to view more information
      </span>
    </motion.div>
  );
};


const Works = () => {
  const [modalData, setModalData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const projectSlug = query.get("project");

  useEffect(() => {
    if (projectSlug) {
      const project = projects.find((p) => slugify(p.name) === projectSlug);
      if (project) {
        setModalData(project);
        document.body.style.overflow = "hidden";

        // Scroll to the projects section
        const projectsSection = document.getElementById("portfolio");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Invalid slug, remove the query parameter
        navigate("/", { replace: true });
      }
    } else {
      // If no project parameter, close any open modal
      if (modalData) {
        setModalData(null);
        document.body.style.overflow = "auto";
      }
    }
  }, [projectSlug, navigate]);

  const openModal = (project) => {
    setModalData(project);
    document.body.style.overflow = "hidden";
    navigate(`/?project=${slugify(project.name)}`);
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = "auto";
    navigate("/", { replace: true });
  };

  return (
    <>
      {/* Existing content */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My creations</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {modalData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[100] overflow-y-auto"
          role="dialog"
          aria-labelledby="project-modal-label"
        >
          <motion.div
            variants={zoomIn(0.1, 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-white shadow-2xl rounded-3xl dark:bg-primary/75 backdrop-blur max-w-5xl w-full mx-4 md:mx-8 p-6 md:p-10 relative sm:mt-0 mt-[20vh]"
          >
            <button
              type="button"
              className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex justify-center items-center size-10 text-lg font-semibold rounded-full border border-transparent bg-white/20 text-white hover:bg-white/30 dark:bg-neutral-700 dark:hover:bg-neutral-600 z-[150]"
              aria-label="Close"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-6"
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
                <path d="M18 6 6 18" />
                <path d="M6 6 18 18" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
              <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-center justify-center">
                <video
                  controls
                  src={modalData.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="project_video"
                  controlsList="nodownload"
                  className="w-full rounded-lg shadow-lg mb-6 lg:mb-4"
                ></video>
                <div className="flex flex-wrap gap-3 mb-6 lg:mb-0 justify-center">
                  {modalData.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full ${tag.color} bg-opacity-10 border border-current text-center`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col overflow-y-auto max-h-[60vh]">
                <h3
                  id="project-modal-label"
                  className="mb-4 text-4xl font-bold text-gray-900 dark:text-neutral-100"
                >
                  {modalData.name}
                </h3>
                <p className="text-gray-600 dark:text-neutral-400 mb-4 leading-relaxed text-justify pe-3">
                  {modalData.intro}
                </p>
                <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed text-justify pe-3">
                  {modalData.details.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
