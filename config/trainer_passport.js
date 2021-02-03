const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Login will using a username/email and password
passport.use(
  new LocalStrategy(
    // Email is being used to sign in
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.Trainer.findOne({
        where: {
          email: email,
        },
      }).then(function (dbTrainer) {
        // If no user with given email
        if (!dbTrainer) {
          return done(null, false, {
            message: "Incorrect Email!",
          });
        }
        // If user has email but incorrect password
        else if (!dbTrainer.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect Password!",
          });
        }
        return done(null, dbTrainer);
      });
    }
  )
);

// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function (trainer, cb) {
  cb(null, trainer);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exports passport
module.exports = passport;
