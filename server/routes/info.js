const express = require("express");
const router = express.Router();
const Info = require("../models/Info");

// GET all info
router.get("/", async (req, res) => {
  try {
    const info = await Info.find();
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new info
router.post("/", async (req, res) => {
  try {
    const newInfo = new Info(req.body);
    const savedInfo = await newInfo.save();
    res.status(201).json(savedInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE info by ID
router.delete("/:id", async (req, res) => {
  try {
    await Info.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Info deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
