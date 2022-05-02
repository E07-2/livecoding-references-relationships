import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  const reviews = await Review.find();

  res.send(reviews);
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  const reviews = await Review.find({ userId }).populate(
    "userId",
    "-_id -hash"
  );

  res.send(reviews);
});

export default router;
