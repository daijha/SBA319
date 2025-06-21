import mongoose from "mongoose";
const locationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // learned this is how you use mongo db _id to reference the related datatype
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    index:true// adds index to state 
  },
  country: {
    type: String,
    required: true,
  },
});

locationSchema.index({userId: 1, city: 1});

export default mongoose.model("Location", locationSchema);
