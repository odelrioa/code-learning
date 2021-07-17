const Heap = require('./collections/heap'); //http://www.collectionsjs.com
const Deque = require('./collections/deque'); //http://www.collectionsjs.com


function reorganize_string(str, k) {
  if (k <= 1) {
    return str;
  }

  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }


  const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  const queue = new Deque();
  const resultString = [];
  while (maxHeap.length > 0) {
    let [frequency, char] = maxHeap.pop();
    // append the current character to the result string and decrement its count
    resultString.push(char);
    // decrement the frequency and append to the queue
    queue.push([char, frequency - 1]);
    if (queue.length === k) {
      [char, frequency] = queue.shift();
      if (frequency > 0) {
        maxHeap.push([frequency, char]);
      }
    }
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join('');
  }
  return '';
}


console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);
console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`);
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`);