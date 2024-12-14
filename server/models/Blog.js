const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // For SEO-friendly URLs
    tags: [
      {
        name: { type: String, required: true },
        color: { type: String },
      },
    ],
    date: { type: Date, required: true }, // Store as an actual date
    image: { type: String, required: true },
    content: { type: String, required: true },
    relatedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }], // References to other blogs
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
