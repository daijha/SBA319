import express from "express";
import Location from "../models/locations.js"; // vs code is mad when this is not caps...?

const locationRouter = express.Router();

locationRouter.get("/", async (req, res) => {
  // to read all of the Location data in the collection
  const results = await Location.find();
  res.status(200).json(results);
});

locationRouter.get("/:id", async (req, res) => {
  // to read only one Location by id in the collection
  const results = await Location.findById(req.params.id);
  res.status(200).json(results);
});

locationRouter.post("/", async (req, res) => {
  const newLocation = await Location.create(req.body); // adds a new Location
  res.status(201).json(newLocation);
});

locationRouter.patch("/:id", async (req, res) => {// use the items _id
  const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: " Updated", newData: updatedLocation });// adheres the updated result so you can see the changes
});

locationRouter.delete("/:id", async (req, res) => {// to delete use the id created for the Location not the user id 
  const deletedItem = await Location.findByIdAndDelete(req.params.id);
  res.json({ message: "Location deleted", deleted:  deletedItem });
});

export default locationRouter;