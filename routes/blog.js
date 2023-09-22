const express = require("express");
const router = express.Router();

//Import Controllers
const {createPost, getPost} = require("../controllers/postCreate")
const {dummyController} = require("../controllers/dummyController")
const {createComment} = require("../controllers/commentController")
const {likePost, unLikePost} = require("../controllers/likeController")

//Mapping Create
router.get("/dummy/page", dummyController)
router.post("/post/create", createPost);
router.get("/posts", getPost);
router.post("/comments/create", createComment)
router.post("/likes/like", likePost)
router.post("/likes/unlike", unLikePost)

//export
module.exports = router;
 
 