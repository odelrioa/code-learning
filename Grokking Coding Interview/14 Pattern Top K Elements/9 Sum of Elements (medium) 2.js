const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_sum_of_elements(nums, k1, k2) {
  const maxHeap = new Heap();
  // keep smallest k2 numbers in the max heap
  for (i = 0; i < nums.length; i++) {
    if (i < k2 - 1) {
      maxHeap.push(nums[i]);
    } else if (nums[i] < maxHeap.peek()) {
      // as we are interested only in the smallest k2 numbers
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }

  // get the sum of numbers between k1 and k2 indices
  // these numbers will be at the top of the max heap
  let elementSum = 0;
  for (i = 0; i < k2 - k1 - 1; i++) {
    elementSum += maxHeap.pop();
  }

  return elementSum;
}


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${
  find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`);
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${
  find_sum_of_elements([3, 5, 8, 7], 1, 4)}`);