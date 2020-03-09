const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Note.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Note.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   console.log("req.body", req.body);
  //   db.Note.create(req.body)
  //     .then(dbNote => {
  //       // find the user id, push his note into user model
  //       return db.User.findOneAndUpdate(
  //         {},
  //         { $push: { notes: dbNote._id } },
  //         { new: true }
  //       );
  //     })
  //     .then(function(dbUser) {
  //       // If the User was updated successfully, send it back to the client
  //       res.json(dbUser);
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Note.create(req.body)
      .then(dbNote => {
        return db.User.findOneAndUpdate(
          {},
          { $push: { notes: dbNote._id } },
          { new: true }
        );
      })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Note.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Note.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
