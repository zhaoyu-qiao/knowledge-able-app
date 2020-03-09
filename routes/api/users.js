const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated");
const auth = require("../../config/auth");
const usersController = require("../../controllers/usersController");

// // LOGIN ROUTE
router.route("/login").post((req, res) => {
  console.log("IN HERE");
  auth
    .logUserIn(req.body.username, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
router.route("/signup").post((req, res) => {
  usersController.signUp(req, res);
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.route("/:id").get(isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch(err => res.status(400).send(err));
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../../models");
// const passport = require("../../passport");

// // Cited MERN Passport.JS: https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367

// router.post("/", (req, res) => {
//   console.log("user signup");

//   const { username, email, password } = req.body;
//   // ADD VALIDATION
//   User.findOne({ username: username }, (err, user) => {
//     if (err) {
//       console.log("User.js post error: ", err);
//     } else if (user) {
//       res.json({
//         error: `Sorry, already a user with the username: ${username}`
//       });
//     } else {
//       const newUser = new User({
//         username: username,
//         email: email,
//         password: password
//       });
//       newUser.save((err, savedUser) => {
//         if (err) return res.json(err);
//         res.json(savedUser);
//       });
//     }
//   });
// });

// router.post(
//   "/login",
//   function(req, res, next) {
//     console.log("routes/user.js, login, req.body: ");
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("logged in", req.user);
//     var userInfo = {
//       username: req.user.username
//     };
//     res.send(userInfo);
//   }
// );

// router.get("/", (req, res, next) => {
//   console.log("===== user!!======");
//   console.log(req.user);
//   if (req.user) {
//     res.json({ user: req.user });
//   } else {
//     res.json({ user: null });
//   }
// });

// router.post("/logout", (req, res) => {
//   if (req.user) {
//     req.logout();
//     res.send({ msg: "logging out" });
//   } else {
//     res.send({ msg: "no user to log out" });
//   }
// });

// module.exports = router;
