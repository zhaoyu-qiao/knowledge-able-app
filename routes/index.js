const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
const API_KEY = process.env.REACT_APP_X_Mashape_Key;
// API Routes
console.log(API_KEY);
router.use("/api", apiRoutes);

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
