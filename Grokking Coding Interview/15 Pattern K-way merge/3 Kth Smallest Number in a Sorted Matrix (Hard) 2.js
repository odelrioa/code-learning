function find_Kth_smallest(matrix, k) {
  const n = matrix.length;
  let start = matrix[0][0],
    end = matrix[n - 1][n - 1];
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    const [count, smaller, larger] = count_less_equal(matrix, mid, matrix[0][0], matrix[n - 1][n - 1]);

    if (count === k) {
      return smaller;
    }
    if (count < k) {
      start = larger; // search higher
    } else {
      end = smaller; // search lower
    }
  }

  return start;
}

function count_less_equal(matrix, mid, smaller, larger) {
  let count = 0,
    n = matrix.length;
  let row = n - 1,
    col = 0;
  while (row >= 0 && col < n) {
    if (matrix[row][col] > mid) {
      // as matrix[row][col] is bigger than the mid, let's keep track of the
      // smallest number greater than the mid
      larger = Math.min(larger, matrix[row][col]);
      row -= 1;
    } else {
      // as matrix[row][col] is less than or equal to the mid, let's keep track of the
      // biggest number less than or equal to the mid
      smaller = Math.max(smaller, matrix[row][col]);
      count += row + 1;
      col += 1;
    }
  }

  return [count, smaller, larger];
}


console.log(`Kth smallest number is: ${
  find_Kth_smallest([
    [1, 4],
    [2, 5],
  ], 2)}`);

console.log(`Kth smallest number is: ${
  find_Kth_smallest([
    [-5],
  ], 1)}`);

console.log(`Kth smallest number is: ${
  find_Kth_smallest([
    [2, 6, 8],
    [3, 7, 10],
    [5, 8, 11],
  ], 5)}`);

console.log(`Kth smallest number is: ${
  find_Kth_smallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ], 8)}`);