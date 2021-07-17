const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}


function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, ((a, b) => b.end - a.end));
  for (i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }
    // add the current meeting into min_heap
    minHeap.push(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}


console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);