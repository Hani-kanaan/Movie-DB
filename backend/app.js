import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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


