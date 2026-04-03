import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        name:String,
        emain:String,
        comment:String,
    },
    { timestamps: true }

)

export const Comment = mongoose.model("Comment",commentSchema)