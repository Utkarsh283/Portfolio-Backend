import mongoose from "mongoose";

const strategySchema = new mongoose.Schema({
  name: { type: String, required: true },
  initialInvestment: { type: Number, required: true },
  currentValue: { type: Number, required: true },
  peakValue: { type: Number, required: true },
  troughValue: { type: Number, required: true },
  years: { type: Number, required: true },
});

export default mongoose.model("Strategy", strategySchema);