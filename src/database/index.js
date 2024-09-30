import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URI; 
  try {
    await mongoose.connect(connectionUrl);
    console.log("Blog database connection is successful");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; 
  }
};

export default connectToDB;
