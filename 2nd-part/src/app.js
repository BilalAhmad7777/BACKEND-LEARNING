const express =require('express');
const app = express();
const noteModel=require("./models/note.model")
 
//note={title,description}--> we need to tell the database how the data will be stored, known as schema

//POST /notes =>Create a note
// GET /notes =>Get all notes
//PATCH /notes?:id => Update a note
//DELETE /notes/:id=> Delete a note

app.use(express.json());
app.post("/notes",async (req,res)=>{
    const data =req.body //title,description
    await noteModel.create({
        title:data.title,
        description: data.description,
    })

    res.status(201).json({
        message:"Note Created"
    })
})


app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find()

    res.status(200).json({
        message:"NOTES FETCHED",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id =req.params.id
    await noteModel.findOneAndDelete({
        _id:id
    }) 

    res.status(200).json({
        message:"Note Deleted Successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id =req.params.id
    const {description}=req.body
    await noteModel.findOneAndUpdate({
        _id:id  //kis base pr update krna hai
    },
    
    {
      description:description //kya update krna hai
    })

    res.status(200).json({
        message:"NOTES UPDATED",
    })
})

module.exports=app