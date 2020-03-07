// Cited: https://harvard.bootcampcontent.com/Harvard-Coding-Boot-Camp/hu-cam-fsf-pt-09-2019-u-c/tree/fabb9966e069180ef305995913a5232842f4d7d0/Week_21/02-Homework/Develop/server
// Creating a user schema with bcrypt

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // `notes` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Note model
  // This allows us to populate the User with any associated Notes
  notes: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Note"
    }
  ]
});
// // Execute before each user.save() call
UserSchema.pre("save", function(callback) {
  if (!this.isModified("password")) {
    return callback();
  }
  // hashing/encypting user password
  this.password = bcrypt.hashSync(this.password, 10);
  callback();
});
UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
