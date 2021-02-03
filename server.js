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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// access to all files in public folder
app.use(express.static("public"));

//express-session middleware
app(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//// Require Routes section IN PROGRESS ////
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


//// SYNC THE DATABASE THEN LISTEN TO PORT ////
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        return console.log(`Listening on http://localhost:${PORT}`)
    })
});