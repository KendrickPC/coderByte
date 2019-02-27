# Introduction to React

##### What is JSX?

Within code that uses React you may see tags that look similar to HTML tags,
but they are used directly within JavaScript code. JSX is a JavaScript syntax
extension that makes it a bit easier to create HTML tags and stacked
components in large UI's. You'll be seeing JSX in place of vanilla
JavaScript within React code below.

##### Installing React

To start using React only 3 scripts need to be included on your web page.
The first is the actual React library, the second is for React's virtual DOM,
and the third is the Babel transpiler which will convert the JSX code into
JavaScript so the browser can understand our code.

By including the Babel transpiler script, and placing our code within the
text/babel script tags, our JSX code will automatically be converted in the
browser when we open the file.

<!DOCTYPE html>
<html>
<head> 
  <meta charset="utf-8" />
  <title> Testing React </title>    
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react.min.js"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.min.js"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>        
</head>
<body>
  <div id="main"></div>
  <script type="text/babel">
    // React code goes here...
  </script>
</body>  
</html>

##### Create a Counter component

We'll start off with a simple example by creating a timer. This will introduce you to several React
properties and functions such as state and render, and how to insert React components into the DOM.
This example is part of the starter kit which provides several examples, but we'll be modifying a
few things in the code.

The goal of using React is to make it easy to create, update, and modify different UI components
without our code turning into spaghetti code. It allows us to create components where everything
they need to function properly is contained within a small module.

We'll call our component Counter, and then we'll setup our component to render within the main
div we created.

// create a React component
var Counter = React.createClass({
  // methods go here...
});

// render a React component in the DOM
// first parameter is the component
// second parameter is the DOM element we're inserting it into
ReactDOM.render(
  <Counter />,
  document.getElementById('main')
);
