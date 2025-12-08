const { longestBalanced } = require('../../js/longestBalanced');

describe('Edge cases', () => {
  test("nested pairs", () => {
    expect(longestBalanced("(())")).toBe(4);
  });

  test("multiple segments, longest in middle", () => {
    expect(longestBalanced(")()())")).toBe(4); // "()()"
  });

  test("mix of good and bad parentheses", () => {
    expect(longestBalanced("())(()())")).toBe(6); // "(()())"
  });

  test("long valid chain", () => {
    expect(longestBalanced("(()(()))")).toBe(8);
  });

  test("alternating breaks", () => {
    expect(longestBalanced("()(()")).toBe(2); // "()"
  });

  test("valid at the very end", () => {
    expect(longestBalanced("(((())")).toBe(4); // "(())"
  });
});
