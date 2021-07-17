using namespace std;

#include <iostream>
#include <queue>
#include <vector>

class Point {
 public:
  int x = 0;
  int y = 0;

  Point(int x, int y) {
    this->x = x;
    this->y = y;
  }

  int distFromOrigin() const {
    // ignoring sqrt
    return (x * x) + (y * y);
  }

  const bool operator<(const Point& p) { return p.distFromOrigin() > this->distFromOrigin(); }
};

class KClosestPointsToOrigin {
 public:
  static vector<Point> findClosestPoints(const vector<Point>& points, int k) {
    // put first 'k' points in the vector
    vector<Point> maxHeap(points.begin(), points.begin() + k);
    make_heap(maxHeap.begin(), maxHeap.end());

    // go through the remaining points of the input array, if a point is closer to the origin than
    // the top point of the max-heap, remove the top point from heap and add the point from the
    // input array
    for (int i = k; i < points.size(); i++) {
      if (points[i].distFromOrigin() < maxHeap.front().distFromOrigin()) {
        pop_heap(maxHeap.begin(), maxHeap.end());
        maxHeap.pop_back();
        maxHeap.push_back(points[i]);
        push_heap(maxHeap.begin(), maxHeap.end());
      }
    }

    // the heap has 'k' points closest to the origin
    return maxHeap;
  }
};

int main(int argc, char* argv[]) {
  vector<Point> maxHeap = KClosestPointsToOrigin::findClosestPoints({{1, 3}, {3, 4}, {2, -1}}, 2);
  cout << "Here are the k points closest the origin: ";
  for (auto p : maxHeap) {
    cout << "[" << p.x << " , " << p.y << "] ";
  }
}
