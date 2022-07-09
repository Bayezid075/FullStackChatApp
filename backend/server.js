const express = require("express");
const app = express();
const chat = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

app.use(express.json()); //to accept json data
app.use("/api/data", userRoutes);

app.listen(5000, console.log("Server Started with 5000 port"));
