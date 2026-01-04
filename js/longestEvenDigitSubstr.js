/**
 * 🧩 Kata: Longest Even Digit Substring
 * Given a string containing only digits ("0"–"9"), return the length of the longest substring where every digit appears an even number of times.
 * A digit counts as “even” if it appears 0, 2, 4, 6… times in that substring.
 * Substring must be contiguous. If no such substring exists, return 0.
 * Examples: 
 * Input:  "123123", Output: 6. Each digit appears twice (even).
 * Input:  "3242415", Output: 5. Longest is "24241" - all digits even count.
 * Input: "5", Output: 0. "5" appears once → odd.
*/

function longestEvenDigitSubstr(s) {
  let maxLength = 0;

  for (let start = 0; start < s.length; start++) {
    const freq = new Set();
    for (let end = start; end < s.length; end++) {
      freq.add(s[end]);

      // If more than 2 distinct characters, break early
      if (freq.size > 2) break;

      maxLength = Math.max(maxLength, end - start + 1);
    }
  }

  return maxLength;
}

longestEvenDigitSubstr("eceba");     // 3
longestEvenDigitSubstr("ccaabbb");   // 5
longestEvenDigitSubstr("a");         // 1
longestEvenDigitSubstr("abc");       // 2

module.exports = { longestEvenDigitSubstr };
