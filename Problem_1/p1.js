/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  // Exit if wordList does not include endWord
  if (!wordList.includes(endWord)) return [];

  let resultList = [];
  let unvisitedWord = [...wordList];

  const item = new Item(beginWord, 0, null);
  let activeList = [item];

  let minDepth = Number.MAX_SAFE_INTEGER; // Number.MAX_SAFE_INTEGER

  while (activeList.length > 0) {
    const top = activeList.shift();

    if (resultList.length > 0 && top.depth > minDepth) {
      return resultList;
    }

    for (let i = 0; i < top.word.length; i++) {
      const c = top.word[i];
      let charArray = top.word.split("");
      for (var j = "a"; j <= "z"; j = nextChar(j)) {
        if (j == c) {
          continue;
        }
        charArray[i] = j;
        const newItem = charArray.join("");

        if (newItem === endWord) {
          const subArray = [endWord];
          let p = top;

          while (p != null) {
            subArray.push(p.word);
            p = p.parent;
          }

          resultList.push(subArray.reverse());

          if (top.depth <= minDepth) {
            minDepth = top.depth;
          } else {
            return resultList;
          }
        }

        /**
         *  If newItem string is found in wordList, remove it from cloned unvisitedWord and save to the activeList
         * */
        if (unvisitedWord.includes(newItem)) {
          const n = new Item(newItem, top.depth + 1, top);
          activeList.push(n);
          const index = unvisitedWord.indexOf(newItem);
          unvisitedWord.splice(index, 1);
        }
      }
    }
  }

  return resultList;
};

/**
 * @param {string} word
 * @param {Number} depth
 * @param {Item} parent
 * @ConstructorFunction
 */
function Item(word, depth, parent) {
  this.word = word;
  this.depth = depth;
  this.parent = parent;
}

/**
 * @param {string} c
 * @return {string}
 */
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

console.log(`
  Input:\n
  beginWord = "hit",\n
  endWord = "cog",\n
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"]\n
  Output:
  `);
console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
