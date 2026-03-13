import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  name:String,
  desc:String
})

const noteModel = mongoose.model("note",noteSchema);

export default noteModel;