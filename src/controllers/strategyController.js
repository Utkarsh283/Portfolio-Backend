import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { calculateROI, calculateCAGR, calculateDrawdown } from "../utils/financialCalculations.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sampleStrategies = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/sampleStrategies.json"), "utf-8")
);

export const getStrategyPerformance = (req, res) => {
  const strategiesWithCalculations = sampleStrategies.map((strategy) => ({
    ...strategy,
    roi: calculateROI(strategy.initialInvestment, strategy.currentValue),
    cagr: calculateCAGR(strategy.initialInvestment, strategy.currentValue, strategy.years),
    drawdown: calculateDrawdown(strategy.peakValue, strategy.troughValue),
  }));

  res.json(strategiesWithCalculations);
};