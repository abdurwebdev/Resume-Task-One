import mongoose from 'mongoose';

const connectToDB = () =>{
  mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Data Base Connected");
  }).catch(()=>{
    console.log("Error Connecting To Datatbase")
  })
}

export default connectToDB;