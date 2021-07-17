const Heap = require('./collections/heap'); //http://www.collectionsjs.com


function sort_character_by_frequency(str) {
  // find the frequency of each character
  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr in charFrequencyMap) {
      charFrequencyMap[chr]++;
    } else {
      charFrequencyMap[chr] = 1;
    }
  }

  // add all characters to the max heap
  const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
  Object.keys(charFrequencyMap).forEach((key) => {
    maxHeap.push([charFrequencyMap[key], key]);
  });

  // build a string, appending the most occurring characters first
  const sortedString = [];
  while (maxHeap.length > 0) {
    [frequency, char] = maxHeap.pop();
    for (let i = 0; i < frequency; i++) {
      sortedString.push(char);
    }
  }
  return sortedString.join('');
}


console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('Programming')}`);
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`);