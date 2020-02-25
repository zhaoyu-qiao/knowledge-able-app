// this file is only for querying the words api for dictionary
import axios from "axios";
// import unirest from "unirest";

const BASEURL = "https://wordsapiv1.p.mashape.com/words/";
const X_Mashape_Key = "c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea";

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
  // request header X-Mashape-Key=c689d162f5mshf499a4cc1699b78p184059jsn3776ce81a3ea
  searchWord: function(query) {
    console.log("Search Word");
    return axios
      .get(BASEURL + query, {
        headers: {
          "X-Mashape-Key": X_Mashape_Key
        }
      })
      // .then(console.log); //!!! TODO- toUpperCase
  }
  // Saves a book to the database
  // saveBook: function (bookData) {
  //   return axios.post("/api/books", bookData).then(result => result.data);
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
