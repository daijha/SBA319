import express from "express";
import User from "../models/users.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  // to read all of the user data in the collection
  const results = await User.find();
  res.status(200).json(results);
});

userRouter.get("/:id", async (req, res) => {
  // to read only one user by id in the collection
  const results = await User.findById(req.params.id);
  res.status(200).json(results);
});

userRouter.post("/", async (req, res) => {
  const newUser = await User.create(req.body); // adds a new user
  res.status(201).json(newUser);
});

userRouter.patch("/:id", async (req, res) => {
  // NEED TO USE THE MONGODB _ID IN THE URL TO ACCESS USER.
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: " Id Updated", newData: updatedUser });// adheres the updated user so you can see the results made
});

userRouter.delete("/:id", async (req, res) => {
  const deletedItem = await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted", deleted:deletedItem });
});

export default userRouter;
