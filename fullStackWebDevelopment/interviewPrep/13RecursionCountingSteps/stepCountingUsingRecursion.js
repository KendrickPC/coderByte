function countSteps(N) {
  // To climb one step, there is only one solution.
  // To climb two steps, there is only two solutions.
  if (N === 1) {
    return 1;
  }
  if (N === 2) {
    return 2;
  }
  // For all N > 2, add the previous (N - 1) + (N - 2) steps to get
  // the recursive answer.
  return countSteps(N - 1) + countSteps(N - 2);
}

// the solution for N = 6 will recursively be solved by calculating
// the solution for N = 5, N = 4, N = 3, and N = 2 which we know is 2
countSteps(6);

// N = 5 => 8
// N = 4 => 5

// N = 3 => 3
// N = 2 => 2
