// this file is only for querying the words api for dictionary
import axios from "axios";

export default {
  // use your own api to do the axios on server route /search.
  searchWord: function(query) {
    return axios.post("/search", { search: query });
  }
};
