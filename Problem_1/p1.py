import sys
from string import ascii_lowercase

class Item:
    """
    :type word: str
    :type depth: int
    :type parent: Item
    """
    def __init__(self, word, depth, parent):
        self.word = word
        self.depth = depth
        self.parent = parent


class Solution:
    """
    :type beginWord: str
    :type endWord: str
    :type wordList: List[str]
    :rtype: List[List[str]]
    """

    def findLadders(self, beginWord, endWord, wordList):
        # Exit if wordList does not include endWord
        if endWord not in wordList:
            return []
        
        resultList = []
        unvisitedWord = wordList[:]
        item = Item(beginWord, 0, None)
        activeList = [item]
        minDepth = sys.maxint


        while len(activeList) > 0:
            top = activeList.pop(0)

            if len(resultList) > 0 and top.depth > minDepth:
                return resultList

            for x in range(len(top.word)):
                c = top.word[x]
                charList = list(top.word)

                for y in ascii_lowercase:
                    if y == c:
                        continue
                    
                    charList[x] = y
                    newItem = ''.join(charList)

                    if newItem == endWord:
                        subList = [endWord]
                        p = top

                        while p != None:
                            subList.append(p.word)
                            p = p.parent
                        
                        subList.reverse()
                        resultList.append(subList)

                        if top.depth <= minDepth:
                            minDepth = top.depth
                        else:
                            return resultList
                    # If newItem string is found in wordList, remove it from cloned unvisitedWord and save to the activeList
                    if newItem in unvisitedWord:
                        n = Item(newItem, top.depth + 1, top)
                        activeList.append(n)
                        unvisitedWord.remove(newItem)
        
        return resultList
    
x = Solution()
y = x.findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
print(y)
