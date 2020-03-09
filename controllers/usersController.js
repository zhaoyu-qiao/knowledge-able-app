// Cited: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/tree/fabb9966e069180ef305995913a5232842f4d7d0/Week_21/02-Homework/Develop/server

const db = require("../models");

// Defining methods for the usersController
module.exports = {
  signUp: function(req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
};
