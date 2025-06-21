import express from "express";
import mongoose from "mongoose"; // imports monogoose
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
const app = express();
app.use(express.json()); // parse to json if using put or post requests
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json("base url reached");
});

app.use("/users", userRouter); // connects the userRouter to the main file

await mongoose
  .connect(process.env.MONGO_URI) // connects to mongo db
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch(() => {
    console.log(`NOT Connected to database `);
  });

app.listen(PORT, () => {
  console.log("server Listening on port", PORT);
});
