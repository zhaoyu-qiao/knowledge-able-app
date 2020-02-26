// this file is only for querying the words api for dictionary
import axios from "axios";

const BASEURL = "https://wordsapiv1.p.mashape.com/words/";
const X_Mashape_Key = process.env.REACT_APP_X_Mashape_Key;
// https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios
// You can send a get request with Headers (for authentication with jwt for example):
// axios.get('https://example.com/getSomething', {
//  headers: {
//    Authorization: 'Bearer ' + token //the token is a variable which holds the token
//  }
// })

//!!! Is this correct with the header? - yes
export default {
  // https://www.wordsapi.com/docs/
  // use your own api to do the axios on server route /search.
  searchWord: function(query) {
    return axios.post("/search", { search: query });
  }
  // Saves a book to the database
  // saveBook: function (bookData) {
  //   return axios.post("/api/books", bookData)\\.then(result => result.data);
  // },
  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id).then(result => result.data);
  // },
  // // Get the saved a books from the database
  // savedBooks: function () {
  //   return axios.get("/api/books").then(result => result.data);
  // }
};
