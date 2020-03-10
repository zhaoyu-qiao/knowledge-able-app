import axios from "axios";

export default {
  getNote: function(id) {
    // get a specific note by its id?
    return axios.get("api/notes/" + id);
  },
  // Saves a book to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData).then(res => res.data);
  },
  // Deletes the book with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Get the saved a books from the database
  savedNotes: function() {
    return axios.get("/api/notes").then(result => result.data);
  },

  userNotes: function(username) {
    return axios.get("/api/notes/" + username).then(result => result.data);
  }
};
