# Technical Test

## Problem 1

Design a micro service that accepts two words(beginWord and endWord), and a dictionary's word list to find all shortest transformation sequence(s) from beginWord to endWord, such that:

1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Example 1:

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
```

Example 2:

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []
```

> Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

**_Structure for python solution:_**

```
class Solution(object):
    def findLadders(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: List[List[str]]
        """
```

**_Structure for Java solution:_**

```
class Solution {
    public List<List<String>> printSolutions(String beginWord, String end-Word, List<String> wordList) {
        //business logic to be placed here
    }
}
```

**_Structure for JS solution:_**

```
/**
* @param {string} beginWord
* @param {string} endWord
* @param {string[]} wordList
* @return {string[][]}
*/
var findLadders = function(beginWord, endWord, wordList) {}
```

---

## Problem 2

Develop a micro service that take ’n’ points on a 2D plane as input, and finds the maximum number of points that lie on the same straight line.

Example 1:

```
Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:
^
|
|        o
|     o
|  o
+------------->
0  1  2  3  4
```

The solution should follow the structure below.

```
/**
 * Definition for a InputPoint.
 * class Point {
 *     int x;
 *     int y;
 *     Point() { x = 0; y = 0; }
 *     Point(int a, int b) { x = a; y = b; }
 * }
 */
class Solution {
    public int findSolution(InputPoint[] points) {
        // logic to be added here
    }
}
```
