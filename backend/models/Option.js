const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  slug: String,
  titre: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Option", optionSchema);
