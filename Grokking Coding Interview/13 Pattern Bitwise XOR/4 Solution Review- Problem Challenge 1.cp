#include <iostream>
#include <vector>

using namespace std;

class Solution {
  public:
    static vector<vector<int>> flipAndInvertImage(vector<vector<int>> arr) {
      int s = arr[0].size();
      for (int row = 0; row < arr.size(); row++) {
          for (int col = 0; col < (s + 1) / 2; ++col) {
              int tmp = arr[row][col] ^ 1;
              arr[row][col] = arr[row][s - 1 - col] ^ 1;
              arr[row][s - 1 - col] = tmp;
          }
      }
      return arr;
    }

    static void print(const vector<vector<int>> arr) {
      for(int i=0; i < arr.size(); i++) {
        for (int j=0; j < arr[i].size(); j++) {
          cout << arr[i][j] << " ";
        }
        cout << "\n";
      }
    }
};

int main(int argc, char* argv[]) {
  vector<vector<int>> arr = vector<vector<int>>{{1, 0, 1}, {1, 1, 1}, {0, 1, 1}};
  Solution::print(Solution::flipAndInvertImage(arr));
  cout << "\n";

  vector<vector<int>> arr2 = vector<vector<int>>{{1,1,0,0},{1,0,0,1},{0,1,1,1},{1,0,1,0}};
  Solution::print(Solution::flipAndInvertImage(arr2));
}