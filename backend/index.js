const express=require("express")
const cors=require("cors")
const { connection } = require("./config/db")

const {postRouter}=require("./routers/post.router")



const app=express()
app.use(express.json())

app.use(cors())



app.use("/data",postRouter)


app.listen(process.env.port,async(req,res)=>{
    try {
        await connection
        console.log("Db is connected")
    } catch (error) {
        console.log("Db is not connected")
    }
    console.log(`server is listening to ${process.env.port}`)
})

