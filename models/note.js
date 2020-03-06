const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({

  title: { type: String },
  link: {
    type: String
    // validator: [
    //   validators.isURL({
    //     message: "Must be a Valid URL",
    //     protocols: ["http", "https", "ftp"],
    //     require_tld: true,
    //     require_protocol: true
    //   })
    // ]
  },
  comment: { type: String }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
