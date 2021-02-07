// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
//
var apiRoutes = require("./controller/api_controller.js");
var userRoutes = require("./controller/user_controller.js");
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

apiRoutes(app);
app.use(userRoutes);

//// SYNC THE DATABASE THEN LISTEN TO PORT ////
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    return console.log(`Listening on http://localhost:${PORT}`);
  });
});
