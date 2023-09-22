const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
        // konsi photo pr comment kiya hai
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        //kisne comment kiya hai
        user:{
            type: String,
            required: true
        },
        // kya comment kiya hai
        body:{
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model("Comment", commentSchema)