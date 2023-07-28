import express from "express";
import songsRouter from "../routes/songs.route.js";
import mongoose from "mongoose";

async function connectMongoose() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/gigih");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
}

async function startRest() {
  await connectMongoose();
  const app = express();

  app.use(express.json());

  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });

  app.use("/songs", songsRouter);
}

export default startRest;
