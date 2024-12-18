const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { auth, requiresAuth } = require('express-openid-connect');
const User = require('./models/User'); // Import User model
const checkAdminEmail = require('./middleware/checkAdminEmail'); // Import middleware

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
};

app.use(auth(config));

// Save user to database
app.use(async (req, res, next) => {
  if (req.oidc && req.oidc.user) {
    const { email, name, picture, sub, updated_at } = req.oidc.user;
    await User.findOneAndUpdate(
      { email },
      { name, picture, sub, updated_at },
      { upsert: true, new: true }
    );
  }
  next();
});

// Middleware to require authentication and check admin email for all non-GET requests
app.use((req, res, next) => {
  if (req.method !== 'GET') {
    requiresAuth()(req, res, () => checkAdminEmail(req, res, next));
  } else {
    next();
  }
});

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

// User authentication routes
app.get('/api/user', requiresAuth(), (req, res) => {
  res.send(req.oidc.user);
});

// Admin authentication routes
app.get('/api/admin', requiresAuth(), checkAdminEmail, (req, res) => {
  res.send(req.oidc.user);
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error(error));
