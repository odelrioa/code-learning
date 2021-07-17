using namespace std;

#include <iostream>
#include <vector>

class MissingNumber {
public:
  static int findMissingNumber(vector<int> &arr) {
    int n = arr.size() + 1;
    // find sum of all numbers from 1 to n.
    int s1 = 0;
    for (int i = 1; i <= n; i++)
      s1 += i;

    // subtract all numbers in input from sum.
    for (int num : arr)
      s1 -= num;

    // s1, now, is the missing number
    return s1;
  }
};

int main(int argc, char *argv[]) {
  vector<int> v1 = {1, 5, 2, 6, 4};
  cout << "Missing number is: " << MissingNumber::findMissingNumber(v1);
}