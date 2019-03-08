# Insert An Interval Into a List of Sorted Disjoint Intervals

This is a common interview question where the input is a sorted list of
disjoint intervals, and your goal is to insert a new interval and merge
all necessary intervals returning a final new list. For example, if the
interval list is [[1,5], [10,15], [20,25]] and you need to insert the
interval [12,27], then your program should return
the new list: [[1,5], [10,27]].

### Algorithm

	(1) Create an array where the finals intervals will be stored.
	(2) Push all the intervals into this array that come before the new 
	interval you are adding.
	(3) Once we reach an interval in that comes after the new interval,
	add our new interval to the final array.
	(4) From this point, check each remaining element in the array and
	determine if the intervals need to be merged.

### Example:

	intervals = [[1, 5], [10, 15], [20, 25]]
	insert = [12, 27]
	final = []

	Begin looping through the array:

	1st interval = [1, 5]
	This interval comes before [12, 27] so just add it to the final.

	final = [[1, 5]]

	2nd interval = [10,15] 
	This interval overlaps with our interval, [12,27], because 12 is
	between 10 and 15. So add the new interval to final.

	final = [[1,5], [12,27]]

	Now we check each remaining interval in the array and determine if
	we can merge somehow.

	2nd interval = [10,15] 
	This interval overlaps with the last element in final, so merge by
	taking the minimum start interval and maximum end interval. 
	Minimum of (10, 12) and maximum of (15, 27) gives us: [10,27].
	Now replace the last interval in final with this merged interval.

	final = [[1, 5], [10, 27]]

	3rd interval = [20,25] 
	This interval overlaps with the last element in final, so merge by
	taking the minimum start interval and maximum end interval. 
	Minimum of (10, 20) and maximum of (27, 25) gives us: [10,27]. 
	Now replace the last interval in final with this merged interval.

	final = [[1,5], [10,27]]

	No more intervals in the original array, so: final = [[1,5], [10,27]].

### Run Time

This algorithm runs in O(n) time because, in the worst case, we need to
insert the new interval to the beginning of the array and then compare
and merge every single other interval in the array, but this would still
require only one pass through the array.





