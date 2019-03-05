# Subset Sum Problem

The subset sum problem is an important problem in computer science.
Below, I'll provide a simple algorithm for solving this problem.
The challenge is to determine if there is some subset of numbers in
an array that can sum up to some number S. These algorithms can both
be implemented to solve Array Addition I and Array Addition.

##### Simple (Naive) solution

The algorithm for the exponential time, naive solution, is as follows:
First we will generate every possible set (the power set), and then
check if the sum of any of these sets equals the sum S. For example:

arr = [1, 2, 3] 
sum = 5

All Possible Sets:

	[]
	[1]
	[2]
	[3]
	[1, 2]
	[1, 3]
	[2, 3]
	[1, 2, 3]

We can see that we can get a sum of 5 by adding the elements in the
set [2, 3]. To generate all possible sets of an array, I implement
the following algorithm:

	(1) The initial power set only contains the empty set: [[]]
	(2) I loop through each element in the array and add it to every element in the power set. 
	(3) Then I take the union of these two sets.
	(4) Once I get the power set, I check to see if the sum equals our goal S.

Example:

	arr = [1, 2, 3] 
	sum = 5
	sets = [[]]

	Step 1: Add 1 to the power set
	[[], [1]]

	Step 2: Add 2 to the power set
	[[], [1], [1, 2], [2]]

	Step 3: Add 3 to the power set
	[[], [1], [1, 2], [2], [1, 3], [2, 3], [1, 2, 3], [3]]



