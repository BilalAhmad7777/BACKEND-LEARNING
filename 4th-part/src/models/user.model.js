const mongose=require('mongoose')

const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const userModel=mongoose("user",userSchema);

module.exports= userModel;
