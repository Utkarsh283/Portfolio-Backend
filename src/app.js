import express from "express";
import cors from "cors";

import portfolioRoutes from "./routes/portfolioRoutes.js";
import strategyRoutes from "./routes/strategyRoutes.js";
import marketRoutes from "./routes/marketRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:5173",
    }
));

// Routes
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/strategy", strategyRoutes);
app.use("/api/market", marketRoutes);

export default app;



