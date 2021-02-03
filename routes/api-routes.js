const db = require("../models");
const passport = require("../config/passport");
const { red } = require("cli-color");

module.exports = function(app) {
    // this will send the user to the members page with the valid credentials.
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    // this will log the user in if the signup was successful
    app.post("/api/signup", function(req, res) {
        db.user.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(function() {
            res.redirect(307, "/api/login");
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    });

    // route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // app.get("/api/user_data", function(req, res) {
    //     if()
    // })

}