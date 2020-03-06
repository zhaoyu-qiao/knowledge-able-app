import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.Search_API_KEY;
// const APIKEY = "&api_key=GOOGLE_API_KEY";

export default {
  // https://developers.google.com/books/docs/v1/getting_started
  getBook: function(query) {
    // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return axios.get(BASEURL + query + "&api_key=" + APIKEY + "&limit=10");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("book data", bookData);
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Get the saved a books from the database
  savedBooks: function() {
    return axios.get("/api/books").then(result => result.data);
  },

  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/users/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/users/signup", {
      username: username,
      email: email,
      password: password
    });
  }
};
