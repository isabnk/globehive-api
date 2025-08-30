
// main server entry
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Root + health
app.get("/", (_req, res) => res.send("Backend server is running ✅"));
app.get("/health", (_req, res) =>
  res.json({ ok: true, time: new Date().toISOString() })
);

// *** Inline /posts route (no imports, no chance to miss) ***
app.get("/posts", (_req, res) => {
  res.json([
    {
      id: 1,
      title: "First post",
      image: "https://picsum.photos/seed/1/900/500",
      excerpt: "Hello from your real API."
    },
    {
      id: 2,
      title: "Second post",
      image: "https://picsum.photos/seed/2/900/500",
      excerpt: "Replace with DB data later."
    }
  ]);
});

// (Optional) DB test endpoint
app.get("/users", async (_req, res) => {
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
