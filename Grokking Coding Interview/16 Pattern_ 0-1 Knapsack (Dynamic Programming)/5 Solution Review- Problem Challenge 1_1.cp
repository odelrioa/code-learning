using namespace std;

#include <iostream>
#include <vector>

// divide and conquer

class SubsetSum {
 public:
  virtual int countSubsets(const vector<int> &num, int sum) {
    return this->countSubsetsRecursive(num, sum, 0);
  }

 private:
  int countSubsetsRecursive(const vector<int> &num, int sum, int currentIndex) {
    // base checks
    if (sum == 0) {
      return 1;
    }

    if (num.empty() || currentIndex >= num.size()) {
      return 0;
    }

    // recursive call after selecting the number at the currentIndex
    // if the number at currentIndex exceeds the sum, we shouldn't process this
    int sum1 = 0;
    if (num[currentIndex] <= sum) {
      sum1 = countSubsetsRecursive(num, sum - num[currentIndex], currentIndex + 1);
    }

    // recursive call after excluding the number at the currentIndex
    int sum2 = countSubsetsRecursive(num, sum, currentIndex + 1);

    return sum1 + sum2;
  }
};

int main(int argc, char *argv[]) {
  SubsetSum ss;
  vector<int> num = {1, 1, 2, 3};
  cout << ss.countSubsets(num, 4) << endl;
  num = vector<int>{1, 2, 7, 1, 5};
  cout << ss.countSubsets(num, 9) << endl;
}
