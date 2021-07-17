using namespace std;

#include <iostream>
#include <vector>

class TreeNode {
 public:
  int val = 0;
  TreeNode *left;
  TreeNode *right;

  TreeNode(int x) { val = x; }
};

class UniqueTrees {
 public:
  static vector<TreeNode *> findUniqueTrees(int n) {
    if (n <= 0) {
      return vector<TreeNode *>();
    }
    return findUniqueTreesRecursive(1, n);
  }

  static vector<TreeNode *> findUniqueTreesRecursive(int start, int end) {
    vector<TreeNode *> result;
    // base condition, return 'null' for an empty sub-tree
    // consider n=1, in this case we will have start=end=1, this means we should have only one tree
    // we will have two recursive calls, findUniqueTreesRecursive(1, 0) & (2, 1)
    // both of these should return 'null' for the left and the right child
    if (start > end) {
      result.push_back(nullptr);
      return result;
    }

    for (int i = start; i <= end; i++) {
      // making 'i' root of the tree
      vector<TreeNode *> leftSubtrees = findUniqueTreesRecursive(start, i - 1);
      vector<TreeNode *> rightSubtrees = findUniqueTreesRecursive(i + 1, end);
      for (auto leftTree : leftSubtrees) {
        for (auto rightTree : rightSubtrees) {
          TreeNode *root = new TreeNode(i);
          root->left = leftTree;
          root->right = rightTree;
          result.push_back(root);
        }
      }
    }
    return result;
  }
};

int main(int argc, char *argv[]) {
  vector<TreeNode *> result = UniqueTrees::findUniqueTrees(2);
  cout << "Total trees: " << result.size() << endl;

  result = UniqueTrees::findUniqueTrees(3);
  cout << "Total trees: " << result.size() << endl;
}
