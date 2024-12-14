const express = require("express");
const router = express.Router();
const Technology = require("../models/Technology");

// GET all technologies
router.get("/", async (req, res) => {
  try {
    const technologies = await Technology.find();
    res.status(200).json(technologies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new technology
router.post("/", async (req, res) => {
  try {
    const newTechnology = new Technology(req.body);
    const savedTechnology = await newTechnology.save();
    res.status(201).json(savedTechnology);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a technology by ID
router.delete("/:id", async (req, res) => {
  try {
    await Technology.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Technology deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
