import express from "express"
import dotenv from "dotenv"

import { connectdb } from "./db/db.js"




dotenv.config()
connectdb()
const port = process.env.PORT
const app = express()
app.get("/",(req,res)=>{
    res.send("my portfolio")
})
app.listen(port,()=>{
    console.log(`app run ${port}`)
})

