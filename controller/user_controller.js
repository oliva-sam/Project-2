const express = require("express");
const router = express.Router();

let user = require("../models/user.js");

// router.get("/", function (req, res) {
//   res.redirect("/login");
// });

router.get("/signup", function (req, res) {
  user
    .create(
      ["name", "email"],
      [req.body.name, req.body.email],
      function (result) {
        res.json({ id: result.insertId });
      }
    )
    .then(function () {
      res.redirect(307, "/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// router.get("/user", function (req, res) {
//   user.all(function (data) {
//     var userObject = {
//       users: data,
//     };
//     console.log(userObject);
//     res.render("user", userObject);
//   });
// });
