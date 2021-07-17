function find_single_number(arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++){
    num ^= arr[i];
  }
  return num;
}
  
console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));