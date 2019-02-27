// create a React component
var Counter = React.createClass({

  // this function will update our counter
  updateCounter: function() { },

  // reset the counter variable
  resetCounter: function() { },

  // this render function returns the elements that will be
  // inserted into the DOM with the corresponding data
  render: function() {
    return (
      <div>
        <button onClick={this.updateCounter}> Click me! </button>
        <p> Number of clicks: </p>
        <p> The threshold is set to: </p>
        <button onClick={this.resetCounter}> Reset </button>
      </div>
    );
  }

});

// render a React component in the DOM
// first parameter is the component
// second parameter is the DOM element we're inserting it into
ReactDOM.render(
  <Counter />,
  document.getElementById('main')
);