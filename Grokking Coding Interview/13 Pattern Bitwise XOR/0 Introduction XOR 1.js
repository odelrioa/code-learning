function find_missing_number(arr) {
  const n = arr.length + 1;
  // find sum of all numbers from 1 to n.
  let s1 = 0;
  for (let i = 1; i <= n; i++)
    s1 += i;

  // subtract all numbers in input from sum.
  arr.forEach((num) => {
    s1 -= num;
  });

  // s1, now, is the missing number
  return s1;
}


console.log(`Missing number is: ${find_missing_number([1, 5, 2, 6, 4])}`);