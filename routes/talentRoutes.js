import express from "express";
import Talent from "../models/talents.js";

const talentRouter = express.Router();

talentRouter.get("/", async (req, res) => {
  // to read all of the Talent data in the collection
  const results = await Talent.find();
  res.status(200).json(results);
});

talentRouter.get("/:id", async (req, res) => {
  // to read only one Talent by id in the collection
  const results = await Talent.findById(req.params.id);
  res.status(200).json(results);
});

talentRouter.post("/", async (req, res) => {
  const newTalent = await Talent.create(req.body); // adds a new Talent
  res.status(201).json(newTalent);
});

talentRouter.patch("/:id", async (req, res) => {
  // NEED TO USE THE MONGODB _ID IN THE URL TO ACCESS.
  const updatedTalent = await Talent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: " Updated", newData: updatedTalent });// adheres the updated result so you can see the changes
});

talentRouter.delete("/:id", async (req, res) => {// to delete use the id created for the talent not the user id 
  const deletedItem = await Talent.findByIdAndDelete(req.params.id);
  res.json({ message: "Talent deleted", deleted:  deletedItem });
});

export default talentRouter;