# Find All String Combinations Consisting of Only 0, 1 and ?

For this popular algorithm interview question, the input will be a string
consisting only of the characters 0, 1 and ?, where the ? acts as a wildcard
that can be either a 0 or 1, and your goal is to print all possible
combinations of the string. For example, if the string is "011?0" then your
program should output a set of all strings, which are: ["01100", "01110"].

### Algorithm

The general algorithm we will write a solution for is:

	(1) Call the function with the string and an empty set where we begin
	pushing 0 and 1's.
	(2) Once we reach a ? make a copy of each string set, and for half append
	a 0 and for the other half append a 1.
	(3) Recursively call the function with a smaller string until the
	string is empty.

### Example:

Assume the input string is "10??"

	Initial set = []

	1st character = 1
	set = [1]

	2nd character = 0
	set = [1, 0]

	3rd character = ?
	First we make a copy of each string set and then we add a 0 to half of
	the sets and 1 to the other half.
	set = [[1, 0, ##### 0], [1, 0, ##### 1]]

	4th characer = ?
	Same procedure as the previous step.
	set = [[1, 0, 0, ##### 0], [1, 0, 1, ##### 0]

