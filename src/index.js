// main server entry
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import postsRouter from "./routes/posts.js";   // <-- add this

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Health & root
app.get("/", (req, res) => {
  res.send("Backend server is running ✅");
});
app.get("/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Demo posts API
app.use("/posts", postsRouter);                // <-- mount it

// Example DB endpoint (optional)
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`)
);
