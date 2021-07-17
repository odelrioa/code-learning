const countSubsets = function(num, sum) {
  const dp = [];

  function countSubsetsRecursive(num, sum, currentIndex) {
    // base checks
    if (sum === 0) {
      return 1;
    }

    if (num.length === 0 || currentIndex >= num.length) {
      return 0;
    }

    dp[currentIndex] = dp[currentIndex] || [];
    // check if we have not already processed a similar problem
    if (typeof dp[currentIndex][sum] === 'undefined') {
      // recursive call after choosing the number at the currentIndex
      // if the number at currentIndex exceeds the sum, we shouldn't process this
      let sum1 = 0;
      if (num[currentIndex] <= sum) {
        sum1 = countSubsetsRecursive(num, sum - num[currentIndex], currentIndex + 1);
      }

      // recursive call after excluding the number at the currentIndex
      const sum2 = countSubsetsRecursive(num, sum, currentIndex + 1);

      dp[currentIndex][sum] = sum1 + sum2;
    }

    return dp[currentIndex][sum];
  }

  return countSubsetsRecursive(num, sum, 0);
};

console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);
