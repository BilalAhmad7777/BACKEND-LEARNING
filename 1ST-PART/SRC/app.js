// server ko create krna

const express=require('express')
const app=express();

app.use(express.json())  //middleware

const notes = [] //title,descrition given by user
/*title, description */
/*POST,NOTES */
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created"})
})

// GET /notes
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes sent successfully",
        notes:notes
    })
})

// delete /notes/:index
app.delete('/notes/:index',(req,res)=>{
    const index= req.params.index

    delete notes[index]
    res.status(200).json({
        message:"notes deleted successfully"
    })
})

// patch /notes/:index

app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index
    const description=req.body.description

    notes[index].description = description

    res.status(200).json({
        message:"NOTE UPDATED SUCCESSFULLY"
    })
})


module.exports =app;