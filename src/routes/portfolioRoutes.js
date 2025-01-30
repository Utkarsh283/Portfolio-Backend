import express from "express";
import {
  getPortfolioSummary,
  getPortfolioGrowth,
  getAssetAllocation,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/summary", getPortfolioSummary);
router.get("/growth", getPortfolioGrowth);
router.get("/allocation", getAssetAllocation);

export default router;