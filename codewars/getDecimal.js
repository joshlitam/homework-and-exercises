/*codewar challenge for the day link: https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript
7 kyu: 
Get decimal part of the given number
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

function getDecimal(n){
    return (Math.abs(n) - Math.floor(Math.abs(n)))
  }