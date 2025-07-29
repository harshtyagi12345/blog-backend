const express = require("express");
const router = express.Router();
const { getAllBlogs, addBlog } = require("../controllers/blog-controller");
const upload = require("../middlewares/upload");

router.get("/blogs", getAllBlogs);
router.post("/blogs", upload.single("provider"), addBlog);

module.exports = router;

