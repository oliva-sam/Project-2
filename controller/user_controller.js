const express = require("express");
const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated.js");

let db = require("../models");

router.get("/", function (req, res) {
  res.redirect("/signup");
});

router.get("/login", function (req, res) {
  if (req.user.is_trainer) {
    res.send("is trainer");
    // res.redirect("/trainerHome");
  } else {
    res.send("is client");
    // res.redirect("/clientHome");
  }
});

router.get("/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(function (result) {
      if (req.user.is_trainer) {
        res.send("is trainer");
      } else {
        res.send("is client");
      }
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// router.get("/trainerHome", isAuthenticated, function (req, res) {});
// router.get("/clientHome", isAuthenticated, function (req, res) {});

module.exports = router;
