import express from 'express' //to require express
import cors from 'cors'; //to require cors
import cookieParser from 'cookie-parser'; //to require cookie-parser
import connectDB from './config/mongodb.js';
import dotenv from "dotenv";
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js'


// App Config
dotenv.config();
const app = express()
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()


// MIDDLEWRES
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.get('/', (req,res)=> {
    res.send("API IS WORKING")
})

app.listen(port, ()=>console.log('server started on PORT ' + port))


 

