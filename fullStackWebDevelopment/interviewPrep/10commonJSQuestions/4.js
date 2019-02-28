// When would you use the bind function?

// A good use of the bind function is when you have a particular function
// that you want to call with a specific this value. You can then use bind
// to pass a specific object to a function that uses a this reference.

function lastFirst() {
	return this.last + ', ' + this.first;
};

var arbitraryName = {first: "Jane", last: "Doe"};
console.log(lastFirst.bind(arbitraryName)());


