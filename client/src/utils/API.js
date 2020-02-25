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
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Get the saved a books from the database
  savedBooks: function() {
    return axios.get("/api/books").then(result => result.data);
  }
};
