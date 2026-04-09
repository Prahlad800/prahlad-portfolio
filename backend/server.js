import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import routerComment from "./router/comment_router.js";

import { connectdb } from "./db/db.js"
dotenv.config()
connectdb()
const port = process.env.PORT
const app = express()

app.use(cors());
app.use(express.json());
app.get("/hello",(req,res)=>{
    res.send("my portfolio")
})

app.use("/contact",routerComment)


app.listen(port,()=>{
    console.log(`app run ${port}`)
})

