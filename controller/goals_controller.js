// const express = require("express");
// const router = express.Router();

// let db = require("../models");

// router.get("/", function (req, res) {
//   res.redirect("/client");
// });

// // will display client goals once they have been created
// router.get("/client", function (req, res) {
//   db.Goal.all(function (data) {
//     let goalObject = {
//       user: data,
//     };
//     console.log(goalObject);
//     res.render("client", goalObject);
//   });
// });

// // users will be able to add their own goals
// router.post("/client/goals", function (req, res) {
//   db.Goal.create({
//     goals: req.body.goals,
//   }).then(function (res) {
//     res.redirect("/client");
//   });
// });

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

// module.exports = router;
