const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Service = require("../models/Service");
const Technology = require("../models/Technology");
const Experience = require("../models/Experience");
const Testimonial = require("../models/Testimonial");
const Project = require("../models/Project");
const Info = require("../models/Info");
const Blog = require("../models/Blog");

dotenv.config({ path: '../.env' });

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MONGO_URI is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(async () => {
    console.log("MongoDB connected");

    const constants = require("../../client/website/src/constants/index.js");
    const { services, technologies, experiences, testimonials, projects, info, blogs } = constants;

    // Seed Info
    await Info.deleteMany({});
    await Info.create(info);
    console.log("Info seeded");

    // Seed Services
    await Service.deleteMany({});
    await Service.insertMany(services);
    console.log("Services seeded");

    // Seed Technologies
    await Technology.deleteMany({});
    await Technology.insertMany(technologies);
    console.log("Technologies seeded");

    // Seed Experiences
    await Experience.deleteMany({});
    await Experience.insertMany(experiences);
    console.log("Experiences seeded");

    // Seed Testimonials
    await Testimonial.deleteMany({});
    await Testimonial.insertMany(testimonials);
    console.log("Testimonials seeded");

    // Seed Projects
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log("Projects seeded");

    // Seed Blogs
    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log("Blogs seeded");

    mongoose.disconnect();
  })
  .catch((error) => {
    console.error(error);
    mongoose.disconnect();
  });
