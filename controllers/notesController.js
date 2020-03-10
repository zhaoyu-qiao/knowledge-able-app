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
  findByUsername: function(req, res) {
    db.Note.find({ username: req.params.username })
      .then(dbNote => res.json(dbNote))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("NOTE BODY:", req.body);
    db.Note.create(req.body)
      // TODO: get db.user.id
      .then(dbNote => {
        return db.User.findOneAndUpdate(
          // need to pull the current user id.
          // { _id: req.params.id },
          // { _id: user._id },
          { username: req.body.username },
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
    db.Note.findOneAndUpdate({ _id: req.params.username }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Note.findById({ _id: req.params.username })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
