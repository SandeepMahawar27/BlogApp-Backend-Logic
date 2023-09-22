
const Post = require("../models/post");
 
exports.createPost = async(req,res) => {
    try{
         const {title, body} = req.body;
        //  method 1
        //  const response = await Post.create({title,user,body,comments})

        //method 2
        const post = new Post({title,body})
        const savePost = await post.save();

         res.status(200).json(
            {
                success: true,
                // data: response,
                post:savePost,
                message: "Entry Created Successfully"
            }
        );
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}

exports.getPost = async(req,res) => {
    try{
          const posts = await Post.find()
          .populate("likes").populate("comments")
          .exec();

          res.status(200).json({
            success: true,
            data: posts, 
            message: "Entire Blog Data is fetched"
        })
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}