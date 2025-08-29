import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));
app.get("/posts", (_req, res) => {
  res.json([
    { id: "1", title: "First post", image: "https://picsum.photos/seed/1/900/500", excerpt: "Hello from your hosted API." },
    { id: "2", title: "Second post", image: "https://picsum.photos/seed/2/900/500", excerpt: "Replace with DB later." },
  ]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => console.log(`API on http://0.0.0.0:${PORT}`));
