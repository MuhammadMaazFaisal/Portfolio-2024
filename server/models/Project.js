const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    intro: { type: String, required: true },
    details: {
      description: { type: String, required: true },
    },
    tags: [
      {
        name: { type: String, required: true },
        color: { type: String, required: true },
      },
    ],
    video: { type: String, required: true },
    source_code_link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
