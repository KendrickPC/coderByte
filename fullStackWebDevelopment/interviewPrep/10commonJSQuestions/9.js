// What will the following code output?

0.1 + 0.2 === 0.3

// This will surprisingly output false because of floating point errors in internally
// representing certain numbers. 0.1 + 0.2 does not nicely come out to 0.3 but
// instead the result is actually 0.30000000000000004 because the computer cannot
// internally represent the correct number. One solution to get around this problem
// is to round the results when doing arithmetic with decimal numbers.

Math.round(0.1) + Math.round(0.2) === Math.round(0.3)

