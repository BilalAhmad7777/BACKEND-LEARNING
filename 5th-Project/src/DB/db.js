const mongoose=require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    }
    catch(err){
        console.error("DATABASE NOT CONNECTED :",error); 
    }
}


module.exports=connectDB;