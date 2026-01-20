const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const fetch = require("node-fetch");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uhlwwqt.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const NEWS_API_KEY =
  process.env.NEWS_API_KEY || "pub_aa9ff33d7bb2403fa76477bd3773c52e";

async function run() {
  try {
    await client.connect();
    const db = client.db("newsdb");
    const newsCollection = db.collection("news");

    app.get("/", (req, res) => {
      res.send("News backend running");
    });

    // Fetch news from API and save to DB
    app.get("/news-db", async (req, res) => {
      const { country, category, language, source, from, to } = req.query;
      const query = {};

      if (country) query.country = { $in: [country] };
      if (category) query.category = { $in: [category] };
      if (language) query.language = { $in: [language] };
      if (source) query.source_id = source;

      if (from || to) query.pubDate = {};
      if (from) query.pubDate.$gte = new Date(from);
      if (to) query.pubDate.$lte = new Date(to);

      try {
        const news = await newsCollection
          .find(query)
          .sort({ pubDate: -1 })
          .limit(100)
          .toArray();
        res.json(news);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch news from DB" });
      }
    });

    // Fetch news from DB with filters
    app.get("/news-db", async (req, res) => {
      const { country, category, language, source, from, to } = req.query;
      const query = {};

      if (country) query.country = { $in: [country] }; // match arrays
      if (category) query.category = { $in: [category] };
      if (language) query.language = { $in: [language] };
      if (source) query.source_id = source;

      if (from || to) query.pubDate = {};
      if (from) query.pubDate.$gte = new Date(from);
      if (to) query.pubDate.$lte = new Date(to);

      try {
        const news = await newsCollection
          .find(query)
          .sort({ pubDate: -1 })
          .limit(100)
          .toArray();
        res.json(news);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch news from DB" });
      }
    });

    // Fetch unique countries, categories, languages, sources
    app.get("/filters", async (req, res) => {
      try {
        const allNews = await newsCollection.find({}).toArray();

        const countries = [...new Set(allNews.flatMap((n) => n.country || []))];
        const categories = [
          ...new Set(allNews.flatMap((n) => n.category || [])),
        ]; // flatten arrays
        const languages = [
          ...new Set(allNews.flatMap((n) => n.language || [])),
        ];
        const sources = [
          ...new Set(allNews.map((n) => n.source_id).filter(Boolean)),
        ];

        res.json({ countries, categories, languages, sources });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch filters" });
      }
    });

    console.log("Connected to MongoDB");
  } finally {
    // client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
