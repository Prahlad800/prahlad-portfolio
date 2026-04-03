import mongoose  from "mongoose";

export const connectdb = ()=>{
    const url=process.env.URL
    mongoose.connect(url)
    .then(()=>{
        console.log("db connected")
    })
    .catch((e)=>{
        console.log("db connection errer".e)
    })
}