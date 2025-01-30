import dotenv from "dotenv";
import app from './src/app.js';
import { connect } from "mongoose";
import connectDB from "./src/config/db.js";


dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 5001;



connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error", error);
        process.exit(1);
    });

console.log(`MongoDB URI from .env file: ${process.env.MONGODB_URI}`);
