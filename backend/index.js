import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT ;
const mongoDBURL = process.env.MONGODB_URL;

//for parsing json body:
app.use(express.json());
app.use('/api/user', userRoutes);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to DB");
    app.listen(PORT, () => {
      console.log(`app listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
