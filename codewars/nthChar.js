/*codewar challenge for the day link: https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript5667e8f4e3f572a8f2000039/train/javascript
7 kyu: Substring fun
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
*/

function nthChar(words){
    if (words.length == 0) {
      return ''
    }
    let output = []
    for(i = 0; i < words.length; ++i) {
      output.push(words[i].split("")[i])
    }
    return output.join("")
  }