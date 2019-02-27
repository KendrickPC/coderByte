  // create a React component
  var Counter = React.createClass({

    // "this.props" object comes from the component in the ReactDOM.render function
    getInitialState: function() {
      return { 
        count: 0,
        threshold: this.props.threshold
      };
    },

    // this function will update our counter
    updateCounter: function() { 
      this.setState({ count: this.state.count + 1 });
      if (this.state.count === this.state.threshold) {
        alert('You passed the threshold!');
        this.setState({ threshold: this.state.threshold + 5 });
      }
    },

    // reset the counter variable
    resetCounter: function() { 
      this.setState(this.getInitialState());
    },

    // this render function returns the elements that will be
    // inserted into the DOM with the corresponding data
    render: function() {
      return (
        <div>
          <button onClick={this.updateCounter}> Click me! </button>
          <p> Number of clicks: {this.state.count} </p>
          <p> The threshold is set to: {this.state.threshold}</p>
          <button onClick={this.resetCounter}> Reset </button>
        </div>
      );
    }

  });

  // render a React component in the DOM
  // first parameter is the component
  // second parameter is the DOM element we're inserting it into
  ReactDOM.render(
    <Counter threshold={5} />,
    document.getElementById('main')
  );
  