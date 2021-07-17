using namespace std;

#include <iostream>
#include <queue>
#include <string>
#include <vector>

class AbbreviatedWord {
 public:
  string str;
  int start = 0;
  int count = 0;

  AbbreviatedWord(string str, int start, int count) {
    this->str = str;
    this->start = start;
    this->count = count;
  }
};

class GeneralizedAbbreviation {
 public:
  static vector<string> generateGeneralizedAbbreviation(const string &word) {
    int wordLen = word.length();
    vector<string> result;
    queue<AbbreviatedWord> queue;
    queue.push({"", 0, 0});
    while (!queue.empty()) {
      AbbreviatedWord abWord = queue.front();
      queue.pop();
      if (abWord.start == wordLen) {
        if (abWord.count != 0) {
          abWord.str += to_string(abWord.count);
        }
        result.push_back(abWord.str);
      } else {
        // continue abbreviating by incrementing the current abbreviation count
        queue.push({abWord.str, abWord.start + 1, abWord.count + 1});

        // restart abbreviating, append the count and the current character to the string
        if (abWord.count != 0) {
          abWord.str += to_string(abWord.count);
        }
        abWord.str += word[abWord.start];
        queue.push({abWord.str, abWord.start + 1, 0});
      }
    }

    return result;
  }
};

int main(int argc, char *argv[]) {
  vector<string> result = GeneralizedAbbreviation::generateGeneralizedAbbreviation("BAT");
  cout << "Generalized abbreviation are: ";
  for (auto str : result) {
    cout << str << " ";
  }
  cout << endl;

  result = GeneralizedAbbreviation::generateGeneralizedAbbreviation("code");
  cout << "Generalized abbreviation are: ";
  for (auto str : result) {
    cout << str << " ";
  }
  cout << endl;
}
