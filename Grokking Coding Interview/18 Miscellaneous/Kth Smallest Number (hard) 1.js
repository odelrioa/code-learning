function find_Kth_smallest_number(nums, k) {
  // to handle duplicates, we will keep track of previous smallest number and its index
  let previousSmallestNum = -Infinity,
    previousSmallestIndex = -1;
  currentSmallestNum = Infinity,
    currentSmallestIndex = -1;
  for (i = 0; i < k; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[j] > previousSmallestNum && nums[j] < currentSmallestNum) {
        // found the next smallest number
        currentSmallestNum = nums[j];
        currentSmallestIndex = j;
      } else if (nums[j] === previousSmallestNum && j > previousSmallestIndex) {
        // found a number which is equal to the previous smallest number; since numbers can repeat,
        // we will consider 'nums[j]' only if it has a different index than previous smallest
        currentSmallestNum = nums[j];
        currentSmallestIndex = j;
        break; // break here as we have found our definitive next smallest number
      }
    }
    // current smallest number becomes previous smallest number for the next iteration
    previousSmallestNum = currentSmallestNum;
    previousSmallestIndex = currentSmallestIndex;
    currentSmallestNum = Infinity;
  }
  return previousSmallestNum;
}


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`);

// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`);

console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`);