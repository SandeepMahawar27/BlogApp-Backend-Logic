const Like = require("../models/like")
const Post = require("../models/post")

exports.likePost = async(req,res) =>{
    try{
          const {post,user} = req.body;

        //   metod 1
        // const response = await Like.create()

          //method 2...
          const like = new Like({post,user})
          const savedLike = await like.save();

          const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}}, {new: true})
          .populate("likes")
          .exec();

          res.status(200).json({
            post: updatedPost
          })
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            message: "Error While Unliking Post....",
        })
    }
}

exports.unLikePost = async (req,res) => {
    try{ 
        const {post,like} = req.body
        //find id and deleted likes
        const deletedLikes = await Like.findOneAndDelete({post:post, _id:like})

        //updated the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLikes._id}}, {new:true})

        res.json({
            post: updatedPost
        })
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            message: "Error while UnLikeing Post....",
        })
    }
}