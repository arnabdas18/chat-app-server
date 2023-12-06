import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

config();

connectDB();

const app = express();
app.use(cors());
app.use(json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on PORT:", port);
});
