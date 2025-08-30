// apps/backend/src/routes/posts.js
import { Router } from "express";
const router = Router();

// simple demo data — replace with DB later
router.get("/", (req, res) => {
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

export default router;
