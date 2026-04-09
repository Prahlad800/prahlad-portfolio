import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        name:String,
        
        comment:String,
        email:{
        type:String,
        required:true

    },
    },
    
    { timestamps: true }

)

export const Comment = mongoose.model("Comment",commentSchema)