/**
 * 🧩 Kata: Find the Difference
 * You get two strings s and t. t is s with one extra character added in a random position.
 * Return the extra character.
 */

function findTheDifference(s, t) {
  let sum = 0;

  for (let c of t) {
    sum += c.charCodeAt(0);
  }
  for (let c of s) {
    sum -= c.charCodeAt(0);
    }

  return String.fromCharCode(sum);
}

findTheDifference("abcd", "abcde")   // "e"
findTheDifference("", "y")           // "y"
findTheDifference("a", "aa")         // "a"

module.exports = { findTheDifference };
