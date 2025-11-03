const { longestConsective } = require('../../js/longestConsectiveSequence.js');

describe("longestConsecutive", () => {
  test("finds longest consecutive sequence in basic case", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("handles unsorted input with duplicates", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  test("returns 0 for empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test("returns 1 when only one number exists", () => {
    expect(longestConsecutive([7])).toBe(1);
  });

  test("handles negative numbers", () => {
    expect(longestConsecutive([-1, 0, 1, 2, -2, -3])).toBe(6);
  });

  test("handles no consecutive sequences", () => {
    expect(longestConsecutive([10, 30, 50])).toBe(1);
  });

  test("handles already sorted array", () => {
    expect(longestConsecutive([1, 2, 3, 4, 5, 6])).toBe(6);
  });

  test("handles random order non-sequential input", () => {
    expect(longestConsecutive([5, 100, 6, 102, 7, 101])).toBe(3);
  });
});
