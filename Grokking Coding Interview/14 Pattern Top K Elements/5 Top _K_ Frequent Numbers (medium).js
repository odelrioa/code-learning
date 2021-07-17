const Heap = require('./collections/heap'); //http://www.collectionsjs.com


function find_k_frequent_numbers(nums, k) {
  // find the frequency of each number
  numFrequencyMap = {};
  nums.forEach((num) => {
    if (!(num in numFrequencyMap)) {
      numFrequencyMap[num] = 1;
    } else {
      numFrequencyMap[num]++;
    }
  });

  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  // go through all numbers of the numFrequencyMap and push them in the minHeap, which will have
  // top k frequent numbers. If the heap size is more than k, we remove the smallest(top) number
  Object.keys(numFrequencyMap).forEach((num) => {
    minHeap.push([numFrequencyMap[num], num]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  // create a list of top k numbers
  const topNumbers = [];
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[1]);
  }

  return topNumbers;
}


console.log(`Here are the K frequent numbers: ${
  find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`);

console.log(`Here are the K frequent numbers: ${
  find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`);