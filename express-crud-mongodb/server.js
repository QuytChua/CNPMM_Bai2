import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./src/config/connectDB.js";
import webRoutes from "./src/route/web.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Routes
webRoutes(app);

// Kết nối DB
connectDB();

// Chạy server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
