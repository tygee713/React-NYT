var React = require("react");

var Results = React.createClass({
  getInitialState: function() {
    return { articles: [] };
  },
  handleSubmit: function(event) {
    // event.preventDefault();
    // console.log(event.target.value);
    console.log(this.state.articles[event.target.value].title);
    this.props.saveArticle(this.state.articles[event.target.value]);
    this.props.updateSaved();

  },

  render: function() {
    var thisComp = this;
    var articles = [];

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
          {/* loops through the articles array passed in as a prop */}
          {this.props.articles.map(function(search, i) {
            thisComp.state.articles.push({title: search.headline.main, url: search.web_url});

            return (
              <div>
              <h2 key={i}>{search.headline.main}</h2>
              {
                //<form onSubmit = {thisComp.handleSubmit}>
                //<input type="hidden" name="title" value="search.headline.main"/>
                //<input type="hidden" name="url" value="search.web_url"/>
                //<input type="submit" value="Save"/>
              //</form>
              }
              <button className="btn btn-success" type="button" onClick={thisComp.handleSubmit} value={i}>Save</button>
              </div>
            );
          })}
        </div>
      </div>
    );
    // this.setState({ articles: articles });
  }
});

module.exports = Results;