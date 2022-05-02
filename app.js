import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import reviewRouter from "./routes/review.js";

dotenv.config();

// connect to our database
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connected! 🐢");
  })
  .catch((error) => {
    console.log(error);
    console.log("There was an error connecting to the database");
  });

const app = express();

app.use("/user", userRouter);
app.use("/review", reviewRouter);

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
