import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// MongoDB (MODERNE)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.error("Erreur MongoDB ❌", err));

// Schémas
const Admission = mongoose.model(
  "Admission",
  new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    niveau: String,
    message: String,
    date: { type: Date, default: Date.now }
  })
);

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    nom: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
  })
);

// Routes
app.post("/api/admissions", async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).json({ message: "Admission enregistrée !" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message envoyé !" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Serveur démarré sur http://localhost:${PORT}`)
);
