// const User = require("../models");
// const LocalStrategy = require("passport-local").Strategy;

// // Cited MERN Passport.JS: https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367
// // Authenticating a user with a username and password.

// const strategy = new LocalStrategy(
//   {
//     usernameField: "username"
//   },
//   function(username, password, done) {
//     User.findOne({ username: username }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: "Incorrect username" });
//       }
//       if (!user.checkPassword(password)) {
//         return done(null, false, { message: "Incorrect password" });
//       }
//       return done(null, user);
//     });
//   }
// );

// module.exports = strategy;
