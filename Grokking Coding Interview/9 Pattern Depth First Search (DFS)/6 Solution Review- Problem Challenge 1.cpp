using namespace std;

#include <iostream>
#include <vector>

class TreeNode {
 public:
  int val = 0;
  TreeNode *left;
  TreeNode *right;

  TreeNode(int x) {
    val = x;
    left = right = nullptr;
  }
};

class TreeDiameter {
 public:
  static int findDiameter(TreeNode *root) {
    int treeDiameter = 0;
    calculateHight(root, treeDiameter);
    return treeDiameter;
  }

 private:
  static int calculateHight(TreeNode *currentNode, int &treeDiameter) {
    if (currentNode == nullptr) {
      return 0;
    }

    int leftTreeHeight = calculateHight(currentNode->left, treeDiameter);
    int rightTreeHeight = calculateHight(currentNode->right, treeDiameter);

    // diameter at the current node will be equal to the height of left subtree +
    // the height of right sub-trees + '1' for the current node
    int diameter = leftTreeHeight + rightTreeHeight + 1;

    // update the global tree diameter
    treeDiameter = max(treeDiameter, diameter);

    // height of the current node will be equal to the maximum of the hights of
    // left or right subtrees plus '1' for the current node
    return max(leftTreeHeight, rightTreeHeight) + 1;
  }
};

int main(int argc, char *argv[]) {
  TreeNode *root = new TreeNode(1);
  root->left = new TreeNode(2);
  root->right = new TreeNode(3);
  root->left->left = new TreeNode(4);
  root->right->left = new TreeNode(5);
  root->right->right = new TreeNode(6);
  cout << "Tree Diameter: " << TreeDiameter::findDiameter(root) << endl;
  root->left->left = nullptr;
  root->right->left->left = new TreeNode(7);
  root->right->left->right = new TreeNode(8);
  root->right->right->left = new TreeNode(9);
  root->right->left->right->left = new TreeNode(10);
  root->right->right->left->left = new TreeNode(11);
  cout << "Tree Diameter: " << TreeDiameter::findDiameter(root) << endl;
}
