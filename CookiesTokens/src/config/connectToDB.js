import mongoose from 'mongoose';

const connectToDB = () =>{
  mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
    console.log("Connected To DB")
   })
   .catch((err)=>{
    console.log("Connection Failed",err)
   })
}

export default connectToDB;