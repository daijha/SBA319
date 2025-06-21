//for creating the schema:
import mongoose from "mongoose"; // step 1 import mongoose
const userSchema = new mongoose.Schema({
  // this is how you declare and start the schema...
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    max: 200, // no one lives past 200 !
  },
});
export default mongoose.model("User", userSchema);
