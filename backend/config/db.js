// backend/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect to:", process.env.MONGO_URI); // juste pour tester
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur connexion MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectDB;
