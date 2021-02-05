<<<<<<< HEAD
<<<<<<< HEAD
///// DEPENDENTS /////

const express = require("express");

// instance of express
// port for heroku or local 8080
const app = express();
const PORT = process.env.PORT || 8080;

// requiring database model of trainer.js & client.js
const db = require("./models");

// package to store user data
const session = require("express-session");

// package to authenticate requests
const passport = require("./config/passport");


//// MIDDLEWARE////

// parse posts requests & passport authentication
=======
=======
>>>>>>> main
// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
<<<<<<< HEAD
//// Require Routes section IN PROGRESS ////
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


=======
>>>>>>> main
=======
>>>>>>> main
//// SYNC THE DATABASE THEN LISTEN TO PORT ////
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    return console.log(`Listening on http://localhost:${PORT}`);
  });
});
