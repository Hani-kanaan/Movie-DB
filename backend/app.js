import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Book } from "./models/bookModel.js"; // Import the Book model
import booksRoute from "./routes/booksRoute.js";
dotenv.config();

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.MONGODB_URL;
console.log(' mongodburl:'  , mongoDBURL);
const app = express();

//for parsing json body:
app.use(express.json());

app.get("/", (request, response) => {
  //console.log(request)
  return response.status(234).send("helloo");
});
app.use("/books", booksRoute);

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
