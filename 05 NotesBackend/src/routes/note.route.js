import express from 'express';
import noteModel from '../models/notes.model.js'
const router = express.Router();

router.post("/create",async (req,res)=>{
  const {name,desc} = req.body;
  let note = await noteModel.create({
    name,
    desc
  })
  res.status(201).json({
    message:"Note Created Successfully",
    note
  })
})

router.get("/read",async (req,res)=>{
      let allNotes = await noteModel.find();
      res.status(200).json({
        message:"All Notes Fetched Successfully",
        allNotes
      })
})

router.patch('/update/:id',async (req,res)=>{
  let {id} = req.params;
  let {desc} = req.body;
  let updatedNote = await noteModel.findByIdAndUpdate(id,{desc});
  res.status(200).json({
    message:"Updated Successfully",
    updatedNote
  })
})

router.delete('/delete/:id',async (req,res)=>{
  let {id} = req.params;
  let deletedNote = await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message:"Deleted Successfully",
    deletedNote
  })
})

export default router