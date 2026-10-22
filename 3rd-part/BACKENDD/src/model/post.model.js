const mongoose=require('mongoose')

postSchema=new mongoose.Schema({
    image:String,
    caption:String
})


const postModel = mongoose.model("post",postSchema)

module.exports=postModel; 
