const express = require("express");
const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated.js");

let db = require("../models");

router.get("/", function (req, res) {
  if (req.user) {
    res.redirect("/client");
  }
  res.render("signup");
});

// once account is created a user can then login to their page
router.get("/login", function (req, res) {
  if (req.user) {
    res.redirect("/client");
  }
});

// this route will signup users and will allow them to then use the login to access their page
router.post("/signup", function (req, res) {
  console.log("heres the body", req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(function (res) {
      if (req.user) {
        res.redirect(307, "/client");
      }
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// when user logs in they will see their page here
router.get("/client", isAuthenticated, function (req, res) {
  console.log(res);
  res.render("client");
});

module.exports = router;
