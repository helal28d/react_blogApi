const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
// update post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      //the user is owner of post
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can only update your request ");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.findOneAndDelete({ _id: req.params.id });
        res.status(200).json("post has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can only update your request ");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//get post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get all posts  /by author and by category

router.get("/", async (req, res) => {
  const userName = req.body.user;
  const catName = req.body.cat;
  try {
    let posts;
    if (userName) {
      posts = await Post.find({ username: userName });
    } else if (catName) {
      posts = await Post.find({
        catagories: {
          $in: [catName], //search in the array
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
