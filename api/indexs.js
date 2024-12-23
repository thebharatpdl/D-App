import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";
const jwt = require("jsonwebtoken")
const app = express();
const port = 4000;
import cors from "cors";

// HTTP Server and Socket.IO setup
import { createServer } from "http";
import { Server as SocketIO } from "socket.io";
const http = createServer(app);
const io = new SocketIO(http);

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://bharatpaudel:password@cluster0.zpbdf.mongodb.net/")
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});


const User = require("./models/user");
app.post("/register", async (req, res) => {
  try {

    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    const secretKey = crypto.randomBytes(32).toString("hex");
    const token = jwt.sign({ userId: newUser._id, secretKey });

    res.status(200).json({ token })

  } catch (error) {
    console.log("Error creating user", error);
    res.status(500).json({ error: "INternal server error" })
  }
})
