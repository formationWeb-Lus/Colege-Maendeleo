const express = require("express");
const Option = require("../models/Option");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Option.find());
});

router.get("/:slug", async (req, res) => {
  res.json(await Option.findOne({ slug: req.params.slug }));
});

module.exports = router;
