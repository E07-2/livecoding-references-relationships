import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  const users = await User.find();

  res.send(users);
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  res.send(user);
});

export default router;
