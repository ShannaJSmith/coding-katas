/**
 * 🧩 Kata: Sliding Window – Longest Substring With At Most 2 Distinct Characters
 * Given a string, return the length of the longest substring that contains at most 2 distinct characters.
 * Substring = continuous part of the string.
 */

// brute force method
function longestTwoDistinct(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const set = new Set();

    for (let j = i; j < s.length; j++) {
      set.add(s[j]);

      if (set.size > 2) break;

      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
}

longestTwoDistinct("eceba")     // 3   "ece"
longestTwoDistinct("ccaabbb")   // 5   "aabbb"
longestTwoDistinct("a")         // 1
longestTwoDistinct("abc")       // 2 ("ab" or "bc")

module.exports = { longestTwoDistinct };
