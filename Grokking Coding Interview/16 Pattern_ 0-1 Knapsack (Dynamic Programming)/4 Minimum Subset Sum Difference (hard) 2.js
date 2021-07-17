const canPartition = function(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];
  const dp = [];

  function canPartitionRecursive(num, currentIndex, sum1, sum2) {
    // base check
    if (currentIndex === num.length) return Math.abs(sum1 - sum2);

    dp[currentIndex] = dp[currentIndex] || [];
    // check if we have not already processed similar problem
    if (typeof dp[currentIndex][sum1] === 'undefined') {
      // recursive call after including the number at the currentIndex in the first set
      const diff1 = canPartitionRecursive(num, currentIndex + 1, sum1 + num[currentIndex], sum2);

      // recursive call after including the number at the currentIndex in the second set
      const diff2 = canPartitionRecursive(num, currentIndex + 1, sum1, sum2 + num[currentIndex]);

      dp[currentIndex][sum1] = Math.min(diff1, diff2);
    }
    return dp[currentIndex][sum1];
  }

  return canPartitionRecursive(num, 0, 0, 0);
};

console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartition([1, 3, 100, 4])}`);