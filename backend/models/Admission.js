const mongoose = require("mongoose");

module.exports = mongoose.model("Admission", {
  nom: String,
  telephone: String,
  option: String,
  date: { type: Date, default: Date.now }
});
