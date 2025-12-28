import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"

const PORT=process.env.PORT || 4000
const app=express()

app.use(cors())
app.use(express.json())
let isConnected=false
async function connectToMongoDB() {
  try {
    await connectDB()
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

app.use((req, res, next) => {
  if (!isConnected) {
    connectToMongoDB();
  }
  next();
});

app.use("/api/user",userRouter)
app.use('/api/image',imageRouter)

module.exports=app