
// apps/backend/src/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// sanity checks
app.get("/", (_req, res) => res.send("✅ Globehive API live"));
app.get("/health", (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// posts feed used by the HomeFeedScreen
app.get("/posts", (_req, res) => {
  res.json([
    {
      id: 1,
      title: "Santorini Blue Hour",
      image: "https://picsum.photos/seed/santo/1200/700",
      excerpt: "White domes, blue roofs, and golden light at sunset.",
      location: "Oia, Greece",
      avatar: "https://picsum.photos/seed/u1/80/80"
    },
    {
      id: 2,
      title: "Desert Camp Night",
      image: "https://picsum.photos/seed/desert/1200/700",
      excerpt: "Milky Way above a silent Sahara camp.",
      location: "Merzouga, Morocco",
      avatar: "https://picsum.photos/seed/u2/80/80"
    }
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});
