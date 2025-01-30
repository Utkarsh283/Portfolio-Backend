import express from "express";
import { getStrategyPerformance } from "../controllers/strategyController.js";

const router = express.Router();

router.get("/performance", getStrategyPerformance);

export default router;