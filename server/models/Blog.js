const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    tags: [tagSchema],
    date: { type: Date, required: true, default: Date.now },
    image: { type: String, required: true },
    content: { type: String, required: true },
    relatedBlogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    readingTime: { type: String }, // e.g., "5 min read"
    seo: {
      metaTitle: { type: String },
      metaDescription: { type: String },
    },
  },
  { timestamps: true }
);

// Indexes for optimization
blogSchema.index({ slug: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ date: -1 });

module.exports = mongoose.model("Blog", blogSchema);
