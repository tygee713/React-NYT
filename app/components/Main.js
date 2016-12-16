var React = require("react");

var Search = require("./children/Search.js");
var Results = require("./children/Results.js");
var Saved = require("./children/Saved.js");

var helpers = require("./utils/helpers.js");

var Main = React.CreateClass({
  getInitialState: function() {
    return { searchTerm: "", results: [], saved: [] };
  },
  componentDidMount: function() {

  },
  componentDidUpdate: function() {

  },
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  render = function() {
    return (
      <div className="container">
        <div className="row">

          <div className="jumbotron">

            <h2 className="text-center">NYTimes Search</h2>
            <p className="text-center">
              <em>Enter a topic and start and end years and save your favorite results!</em>
            </p>
            
          </div>

          <div className="row">

            <Search setTerm={this.setTerm} />

          </div>

          <div className="row">

            <Results articles={this.state.results} />

          </div>

        </div>

        <div className="row">

          <Saved saved={this.state.saved} />

        </div>

      </div>
    );
  }
});

module.exports = Main;