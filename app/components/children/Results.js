var React = require("react");

var Results = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();


  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
          {/* loops through the articles array passed in as a prop */}
          {this.props.articles.map(function(search, i) {
            return (
              <div>
              <h2 key={i}>{search.title}</h2>
              <form onSubmit = {this.handleSubmit}>
                <input type="hidden" name="title" value="search.title"/>
                <input type="hidden" name="url" value="search.url"/>
                <input type="submit" value="Save"/>
              </form>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Results;