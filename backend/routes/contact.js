const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/", async (req, res) => {
  await Contact.create(req.body);
  res.json({ message: "Message envoyé" });
});

module.exports = router;
