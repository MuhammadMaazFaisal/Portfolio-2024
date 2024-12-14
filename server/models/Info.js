const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    personalInfo: {
      name: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      phone: { type: String, required: true },
    },
    socialLinks: {
      twitter: { type: String },
      github: { type: String },
      linkedin: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Info", infoSchema);
