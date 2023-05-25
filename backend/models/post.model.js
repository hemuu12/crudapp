const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    name: String || isRequired ,
    department: String || isRequired,
    salary: Number || isRequired,
},
{version:false
})


const postModel=mongoose.model("post",postSchema)


module.exports={
    postModel
}