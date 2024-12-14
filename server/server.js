const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const serviceRoutes = require("./routes/services");
const technologyRoutes = require("./routes/technologies");
const experienceRoutes = require("./routes/experiences");
const infoRoutes = require("./routes/info");
const projectRoutes = require("./routes/projects");
const testimonialRoutes = require("./routes/testimonials");
const blogRoutes = require("./routes/blogs");

// Use routes
app.use("/api/services", serviceRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/info", infoRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error(error));
