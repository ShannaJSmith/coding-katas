const { longestBalanced } = require('../../js/longestBalanced');

describe("longestBalanced()", () => {
  test("empty string", () => {
    expect(longestBalanced("")).toBe(0);
  });

  test("no valid pairs", () => {
    expect(longestBalanced("((((")).toBe(0);
    expect(longestBalanced("))))")).toBe(0);
    expect(longestBalanced(")(")).toBe(0);
  });

  test("simple valid pair", () => {
    expect(longestBalanced("()")).toBe(2);
  });
});
