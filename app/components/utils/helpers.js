var axios = require("axios");

var helper = {

  //runs the query to the NYT API to get news articles
  runQuery: function(topic) {
    
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