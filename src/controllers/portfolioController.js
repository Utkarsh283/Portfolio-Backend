import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const samplePortfolio = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/samplePortfolio.json"), "utf-8")
);

export const getPortfolioSummary = (req, res) => {
  const { totalValue, dailyPnl, winRate } = samplePortfolio;
  res.json({ totalValue, dailyPnl, winRate });
};

export const getPortfolioGrowth = (req, res) => {
  const { start, end } = req.query;
  let growth = samplePortfolio.growth;

  if (start && end) {
    growth = growth.filter(
      (item) => item.date >= start && item.date <= end
    );
  }

  res.json(growth);
};

export const getAssetAllocation = (req, res) => {
  res.json(samplePortfolio.allocation);
};