import mongoose from "mongoose";

const marketSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Market", marketSchema);