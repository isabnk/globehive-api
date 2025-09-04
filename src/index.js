// main server entry
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health
app.get("/health", (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// ------- Demo feed with images + videos --------
const posts = [
  {
    id: 1,
    type: "image",
    title: "Santorini Blue Hour",
    image: "https://picsum.photos/seed/santo/1200/700",
    excerpt: "White domes, blue roofs, and golden light at sunset.",
    location: "Oia, Greece",
    avatar: "https://picsum.photos/seed/u1/80/80"
  },
  {
    id: 2,
    type: "image",
    title: "Desert Camp Night",
    image: "https://picsum.photos/seed/desert/1200/700",
    excerpt: "Milky Way above a silent Sahara camp.",
    location: "Merzouga, Morocco",
    avatar: "https://picsum.photos/seed/u2/80/80"
  },
  {
    id: 3,
    type: "video",
    title: "Big Buck Bunny (teaser)",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    excerpt: "A short open movie by the Blender Institute.",
    location: "Blender Open Movie",
    avatar: "https://picsum.photos/seed/u3/80/80"
  },
  {
    id: 4,
    type: "image",
    title: "Kyoto Alley",
    image: "https://picsum.photos/seed/kyoto/1200/700",
    excerpt: "Quiet lanterns and wooden machiya.",
    location: "Kyoto, Japan",
    avatar: "https://picsum.photos/seed/u4/80/80"
  },
  {
    id: 5,
    type: "video",
    title: "Sintel (clip)",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    poster: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    excerpt: "Another Blender open movie — dragon and wanderer.",
    location: "Blender Institute",
    avatar: "https://picsum.photos/seed/u5/80/80"
  },
  {
    id: 6,
    type: "image",
    title: "Norway Fjords",
    image: "https://picsum.photos/seed/fjord/1200/700",
    excerpt: "Deep blue water and sheer cliffs.",
    location: "Geiranger, Norway",
    avatar: "https://picsum.photos/seed/u6/80/80"
  },
  {
    id: 7,
    type: "image",
    title: "Istanbul Sunset",
    image: "https://picsum.photos/seed/istanbul/1200/700",
    excerpt: "Seagulls over the Bosphorus.",
    location: "Istanbul, Türkiye",
    avatar: "https://picsum.photos/seed/u7/80/80"
  },
  {
    id: 8,
    type: "image",
    title: "NYC Rain",
    image: "https://picsum.photos/seed/nyc/1200/700",
    excerpt: "Yellow cabs and wet reflections.",
    location: "New York, USA",
    avatar: "https://picsum.photos/seed/u8/80/80"
  }
];

app.get("/posts", (_req, res) => {
  res.json(posts);
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});
