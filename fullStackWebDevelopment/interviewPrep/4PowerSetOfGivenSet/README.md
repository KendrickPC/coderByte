# Print All Subsets (Power Set) of a Given Set

The input for this problem will be an array of numbers representing a set,
which only contains unique numbers, and your goal is to print every possible
set combination, otherwise known as the power set. For example:

input set = [1, 2, 3]
power set = [[], [1], [2], [3], [1, 2], [2, 3], [1, 3] [1, 2, 3]]

The power set contains every possible combination of numbers.
It also includes the empty set which contains no numbers from the original set.

##### Algorithm

There will be 2N possible combinations of a set of length N because every
element can either be in the set or not, which gives us 2 possibilities,
and we do this for N numbers, giving us 2 * 2 * 2 ... = 2N.

* (1) Loop from 0 to 2N
* (2) For each number get the binary representation of
  the number, e.g. 3 = 011
* (3) Determine from the binary representation whether or not to include a number
  from the set, e.g. 011 = [exclude, include, include]

##### Example

input set = [1, 2, 3]

The numbers 0 to 2N in binary are the following:

0 = 000
1 = 001
2 = 010
3 = 011
4 = 100
5 = 101
6 = 110
7 = 111

Now for each binary number we determine what numbers from the input set,
[1, 2, 3], to include in the current set that we will add to the power set.

	000 = [exclude, exclude, exclude] = []
	001 = [exclude, exclude, include] = [3]
	010 = [exclude, include, exclude] = [2]
	011 = [exclude, include, include] = [2, 3]
	100 = [include, exclude, exclude] = [1]
	101 = [include, exclude, include] = [1, 3]
	110 = [include, include, exclude] = [1, 2]
	111 = [include, include, include] = [1, 2, 3]

All of the resulting sets make up the power set for [1, 2, 3].


