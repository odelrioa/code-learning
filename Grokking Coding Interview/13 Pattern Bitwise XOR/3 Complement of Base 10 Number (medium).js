function calculate_bitwise_complement(num) {
  // count number of total bits in 'num'
  let bit_count = 0;
  let n = num;
  while (n > 0) {
    bit_count++;
    n = n >> 1;
  }

  // for a number which is a complete power of '2' i.e., it can be written as pow(2, n), if we
  // subtract '1' from such a number, we get a number which has 'n' least significant bits set to '1'.
  // For example, '4' which is a complete power of '2', and '3' (which is one less than 4) has a binary 
  // representation of '11' i.e., it has '2' least significant bits set to '1' 
  let all_bits_set = Math.pow(2, bit_count) - 1;

  // from the solution description: complement = number ^ all_bits_set
  return num ^ all_bits_set;
}

console.log(`Bitwise complement is: ${calculate_bitwise_complement(8)}`);
console.log(`Bitwise complement is: ${calculate_bitwise_complement(10)}`);