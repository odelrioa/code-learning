const Deque = require('./collections/deque'); //http://www.collectionsjs.com

function find_order(tasks, prerequisites) {
  sortedOrder = [];
  if (tasks <= 0) {
    return sortedOrder;
  }

  // a. Initialize the graph
  const inDegree = Array(tasks).fill(0); // count of incoming edges
  const graph = Array(tasks).fill(0).map(() => Array()); // adjacency list graph

  // b. Build the graph
  prerequisites.forEach((prerequisite) => {
    let parent = prerequisite[0],
      child = prerequisite[1];
    graph[parent].push(child); // put the child into it's parent's list
    inDegree[child]++; // increment child's inDegree
  });


  // c. Find all sources i.e., all vertices with 0 in-degrees
  const sources = new Deque();
  for (i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees
  // if a child's in-degree becomes zero, add it to the sources queue
  while (sources.length > 0) {
    const vertex = sources.shift();
    sortedOrder.push(vertex);
    graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
      inDegree[child] -= 1;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // if sortedOrder doesn't contain all tasks, there is a cyclic dependency between tasks, therefore, we
  // will not be able to schedule all tasks
  if (sortedOrder.length !== tasks) {
    return [];
  }

  return sortedOrder;
}


console.log(`Is scheduling possible: ${
  find_order(3, [
    [0, 1],
    [1, 2],
  ])}`);
console.log(`Is scheduling possible: ${
  find_order(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`);
console.log(`Is scheduling possible: ${
  find_order(6, [
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`);