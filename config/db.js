import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected successfully`);
  }
   catch (err) {
    console.log(`Error in Mongodb ${err}`.bgRed.white);
  }
};

export default connectDB;
