// Cited: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/tree/fabb9966e069180ef305995913a5232842f4d7d0/Week_21/02-Homework/Develop/server

const exjwt = require("express-jwt");
require("dotenv").config();
// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: process.env.SERVER_SECRET
});

module.exports = isAuthenticated;
