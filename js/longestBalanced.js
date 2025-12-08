/**
 * 🧩 Kata: Longest Balanced Substring of Parentheses
 * Given a string containing only the characters "(" and ")", 
 * return the length of the longest balanced (valid) parentheses substring.
 * A balanced substring is one where every opening parenthesis has a matching closing parenthesis in the correct order.
 */

function longestBalanced(s) {
  const stack = [-1]; // base index
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
}


longestBalanced("(()")        // 2   "()"
longestBalanced(")()())")     // 4   "()()"
longestBalanced("")           // 0
longestBalanced("(()())")     // 6   full string
longestBalanced("()))((()")   // 2   "()"

module.exports = { longestBalanced };
