const mongoose = require("mongoose");

module.exports = mongoose.model("Contact", {
  nom: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
