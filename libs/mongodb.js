import mongoose from "mongoose";



const connectMongodb = async()=> {
  try {
    // console.log(process.env.MOGODB_URI);
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
}

export default connectMongodb
