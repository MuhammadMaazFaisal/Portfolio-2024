import { lazy } from 'react';
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';

const Hero = lazy(() => import("./Hero"));
const Navbar = lazy(() => import("./Navbar"));
const About = lazy(() => import("./About"));
const Experience = lazy(() => import("./Experience"));
const Works = lazy(() => import("./Works"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import('./Footer'));
const Blogs = lazy(() => import('./Blogs'));
const BlogCardHorizontal = lazy(() => import('./BlogCardHorizontal'));
const BlogList = lazy(() => import('./BlogList'));
const BlogCard = lazy(() => import('./BlogCard'));
const BlogDetails = lazy(() => import('./BlogDetails'));
const { SectionText } = lazy(() => import('./TextComponents'));
const { MotionDiv, MotionParagraph, MotionImage } = lazy(() => import('./MotionComponents'));

export {
  Hero,
  Navbar,
  About,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas,
  Footer,
  BlogCardHorizontal,
  BlogList,
  Blogs,
  BlogCard,
  BlogDetails,
  SectionText,
  MotionDiv,
  MotionParagraph,
  MotionImage,
};
