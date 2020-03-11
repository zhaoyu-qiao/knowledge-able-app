const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
const API_KEY = process.env.REACT_APP_X_Mashape_Key;
const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;
// API Routes
console.log(API_KEY);
router.use("/api", apiRoutes);
router.get("/youtube/:query", (req, res) => {
  let query =(req.params.query);
const baseURL="https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const appendix=`&maxResults=5&key=${YOUTUBE_API}`;
axios.get(baseURL+query+appendix)
.then(response => {
  let videos = (response.data.items);
  console.log(response.data.items)
  res.json(videos);
})
})
router.route("/search").post((req, res) => {
  // https://stackoverflow.com/questions/45578844/how-to-set-header-and-options-in-axios
  // https://www.wordsapi.com/docs/
  // Make the axios request to the dictionary api here.
  // USing the req.body.search parameter, return the results
  axios
    .get(`https://wordsapiv1.p.mashape.com/words/${req.body.search}`, {
      headers: {
        "X-Mashape-Key": API_KEY
      }
    })
    .then(response => {
      console.log(response);
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
