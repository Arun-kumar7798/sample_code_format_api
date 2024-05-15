// controllers/postController.js
let posts = []; // In-memory "database"

function getPosts(req, res) {
  res.json(posts);
}

function createPost(req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
}

module.exports = { getPosts, createPost };
