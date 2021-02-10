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
  console.log(req.user);
  db.Goals.findAll({
    where: {
      UserId: req.user.id,
    },
  }).then(function (data) {
    console.log("goals to show " + data);
    res.render("client", { data });
    // res.json(data);
  });
});
//==================goals======================

// will display client goals once they have been created
router.get("/client", function (req, res) {
  db.User.all(function (data) {
    let goalObject = {
      user: data,
    };
    console.log(goalObject);
    res.render("client", goalObject);
  });
});

// // users will be able to 'complete' their goals once met
// router.put("/client/update/:id", function (req, res) {
//   let condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   db.Goal.update({ goals: req.body.goals }, condition, function (data) {
//     res.redirect("/client");
//     if (data.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // will delete goal if user chooses to do so
// router.delete("/client/delete/:id", function (req, res) {
//   let condition = "id = " + req.params.id;

//   db.Goal.delete(condition, function (data) {
//     if (data.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
//   res.redirect("/client");
// });

module.exports = router;
