const express = require("express");
const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated.js");

let db = require("../models");

router.get("/", function (req, res) {
  // res.redirect("/signup");
  res.render("signup");
});

router.get("/login", function (req, res) {});

router.get("/signup", function (req, res) {
  db.User.create(
    ["signup-email", "signup-password"],
    [req.body.email, req.body.password]
  ).then(function (result) {
    if (req.user) {
      res.redirect("/trainerHome");
    }
  });
  // .then(function (result) {
  //   if (req.user.is_trainer) {
  //     res.send("is trainer");
  //   } else {
  //     res.send("is client");
  //   }
  // })
  // .catch(function (err) {
  //   res.status(401).json(err);
  // });
});

// router.get("/trainerHome", isAuthenticated, function (req, res) {
//   res.render("trainerHome");
// });
// router.get("/clientHome", isAuthenticated, function (req, res) {});

module.exports = router;
