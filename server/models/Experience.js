const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company_name: { type: String, required: true },
    icon: { type: String, required: true },
    iconBg: { type: String, default: "#fff" },
    date: { type: String, required: true },
    points: [{ type: String, required: true }], // Array of strings for experience details
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
