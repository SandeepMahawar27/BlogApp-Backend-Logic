//import models
const Post = require("../models/post")
const Comment = require("../models/comment")

//business logic
exports.createComment = async(req,res) =>{
    try{
        //fetch data from request ki body
        const {post, user, body} = req.body

        // method 1.....
        //create a comment object
        // const comment = new Comment({post,user,body})

        // //save the new comment into database
        // const saveComment = await comment.save();

        // method 2....
        const response = await Comment.create({post,user,body});

        //find the post by Id, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: response._id}}, {new:true } )
          .populate ("comments") //populate the comments array with comment document
          .exec();

          res.status(200).json({
            post:updatedPost
          })

    }catch(err){
           console.log(err);
           return res.status(500).json({
            error: "Error while creating comment",
          });
    }
}