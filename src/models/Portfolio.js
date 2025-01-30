import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  totalValue: { type: Number, required: true },
  dailyPnl: { type: Number, required: true },
  winRate: { type: Number, required: true },
  growth: [
    {
      date: { type: Date, required: true },
      value: { type: Number, required: true },
    },
  ],
  allocation: [
    {
      asset: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
});

export default mongoose.model("Portfolio", portfolioSchema);