//import mongoose
const mongoose = require("mongoose");

// route handler
const likeSchema = new mongoose.Schema(
    {
        //kis post pr  like kiya hai
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post" // referece to the post model
        },
        // kisne like kra hai
        user: {
            type: String,
            required: true
        }
    }
)

//exports
module.exports = mongoose.model("Like", likeSchema)