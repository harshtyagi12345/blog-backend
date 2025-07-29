const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
