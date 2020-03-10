// Cited: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/tree/fabb9966e069180ef305995913a5232842f4d7d0/Week_21/02-Homework/Develop/server

const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  logUserIn: function(username, password) {
    return new Promise((resolve, reject) => {
      db.User.findOne({
        username: username
      })
        .then(user => {
          user.verifyPassword(password, (err, isMatch) => {
            if (isMatch && !err) {
              let token = jwt.sign(
                { id: user._id, username: user.username },
                process.env.SERVER_SECRET,
                { expiresIn: 54000 }
              ); // Sigining the token
              resolve({
                success: true,
                message: "Token Issued!",
                token: token,
                user: user
              });
            } else {
              reject({
                success: false,
                message: "Invalid password."
              });
            }
          });
        })
        .catch(err =>
          reject({ success: false, message: "User not found", error: err })
        );
    });
  }
};
