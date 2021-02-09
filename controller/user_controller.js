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

router.get("/login", function (req, res) {
  if (req.user) {
    res.redirect("/client");
  }
});

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

router.get("/client", isAuthenticated, function (req, res) {
  console.log(res);
  res.render("client");
});

module.exports = router;
