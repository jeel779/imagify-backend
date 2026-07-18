import express from "express";
import cors from "cors";
import 'dotenv/config';
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use('/api/image', imageRouter);

app.get('/test', (req, res) => {
  res.send('API is working fine (database-less mode)');
});

export default app;