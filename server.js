// Cited In class Activity: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/tree/master/Week_20/20-react/01-Activities/11-Stu_ReactRouter/Solved
//require("dotenv").config();
require('dotenv').config({ path: './.env' })
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const morgan = require("morgan");
// express-session is for passport.js
// const session = require("express-session");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Requiring passport as we've configured it
// const passport = require("./passport");
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: true,
//     saveUninitialized: true
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/learningdisabilities",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
