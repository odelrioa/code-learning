const Heap = require('./collections/heap'); //http://www.collectionsjs.com


function find_k_largest_pairs(nums1, nums2, k) {
  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  for (i = 0; i < Math.min(k, nums1.length); i++) {
    for (j = 0; j < Math.min(k, nums2.length); j++) {
      if (minHeap.length < k) {
        minHeap.push([nums1[i] + nums2[j], i, j]);
      } else {
        // if the sum of the two numbers from the two arrays is smaller than the smallest(top)
        // element of the heap, we can 'break' here. Since the arrays are sorted in the
        // descending order, we'll not be able to find a pair with a higher sum moving forward
        if (nums1[i] + nums2[j] < minHeap.peek()[0]) {
          break;
        } else { // we have a pair with a larger sum, remove top and insert this pair in the heap
          minHeap.pop();
          minHeap.push([nums1[i] + nums2[j], i, j]);
        }
      }
    }
  }


  const result = [];
  minHeap.forEach((a) => {
    result.push([nums1[a[1]], nums2[a[2]]]);
  });

  return result;
}


process.stdout.write('Pairs with largest sum are: ');
const result = find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3);
result.forEach((a) => {
  process.stdout.write(`[${a[0]}, ${a[1]}] `);
});