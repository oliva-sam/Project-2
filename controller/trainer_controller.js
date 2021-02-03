const express = require("express");
const router = express.Router();

const trainer = require("../models/trainer.js");

router.get("/", function (req, res) {
  if (req.trainer) {
    res.redirect("/trainers");
  }
});
