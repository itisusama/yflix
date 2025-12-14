import express from "express";
import cors from "cors";
import { config, detailsRoute, connectDB } from "./config/config.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/details", detailsRoute)

// Default route
app.get("/", (_, res) => {
  res.send("🚀 Server is running fine!");
});

// Connect Database
connectDB()
// Start the server
app.listen(config.PORT, () => console.log(`✅ Server running on port ${config.PORT}`));