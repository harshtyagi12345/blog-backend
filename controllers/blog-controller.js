const Blog = require("../models/blogs-model");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a blog
const addBlog = async (req, res) => {
  try {
    const { price, description, service } = req.body;
    const provider = req.file ? req.file.filename : null;

    if (!provider) {
      return res.status(400).json({ message: "Provider image is required" });
    }

    const blog = new Blog({
      provider,
      price,
      description,
      service,
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllBlogs, addBlog };
