import mongoose from "mongoose";
const talentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // matches the _id
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Talent", talentSchema);
