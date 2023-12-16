import mongoose from "mongoose";
import { DB_NAME , MONGODB_URI } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance= await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
    
         console.log(`\nMongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed.",error.message);
        process.exit(1);
    }
}

export default connectDB;