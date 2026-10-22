const mongoose = require("mongoose");
async function connectDB() {
    await mongoose.connect("mongodb+srv://YT:vmD0XsqaOFMFwCbZ@yt-complete-backemd.gspimax.mongodb.net/halley")

    console.log("Connected to DB")
}

module.exports =connectDB