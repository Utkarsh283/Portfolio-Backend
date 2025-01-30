import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON file using fs.readFileSync
const sampleMarketData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/sampleMarketData.json"), "utf-8")
);

// Get market updates
export const getMarketUpdates = (req, res) => {
  res.json(sampleMarketData);
};