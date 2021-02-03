const express = require("express");
const router = express.Router();

let user = require("../models/user.js");

router.get("/", function (req, res) {
  if (req.user.is_trainer) {
    res.redirect("/trainers");
  } else {
    res.redirect("/clients");
  }
});