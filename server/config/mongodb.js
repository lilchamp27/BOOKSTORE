import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log("DATABASE CONNECTED")
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`)

}

export default connectDB;