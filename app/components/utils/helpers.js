var axios = require("axios");
var jsonp = require("jsonp");

var helper = {

  //runs the query to the NYT API to get news articles
  runQuery: function(queryTerm, startYear, endYear) {
    var authKey = '02f755e84aa34b25bfb1063dadb369e2';

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey
      + "&q=" + queryTerm + "&begin_date=" + startYear + "&end_date=" + endYear;

    return axios.get(url: queryURL, withCredentials: true)
    .then(function(NYTData) {
    // jsonp(queryURL, null, function(err, NYTData) {
      console.log(NYTData.response);
      return NYTData.response.formatted;
    });

  },

  //returns the saved articles in the database
  getSaved: function() {
    return axios.get("/api");
  },

  //saves a new article to the database
  postSaved: function(article) {
    return axios.post("/api", article);
  }
};

module.exports = helper;