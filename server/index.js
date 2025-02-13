import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/toDo.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connection successful");
});

db.on("error", () => {
  console.log("Database connection failed");
});

app.use("/api/todos", todoRoutes);
