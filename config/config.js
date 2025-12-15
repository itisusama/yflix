import dotenv from "dotenv";
dotenv.config();
// Imports
import detailsRoute from "../modules/details/route.js";
import connectDB from "./db.js";

export const config = {
  PORT: process.env.PORT,
  DATABASE_URI: process.env.MONGO_URI,
};

export { detailsRoute, connectDB };
