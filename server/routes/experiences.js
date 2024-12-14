const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

// GET all experiences
router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new experience
router.post("/", async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE an experience by ID
router.delete("/:id", async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Experience deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
