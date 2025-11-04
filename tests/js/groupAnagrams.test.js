const { groupAnagrams } = require('../../js/groupAnagrams');

describe("groupAnagrams", () => {
  test("groups basic anagrams", () => {
    const input = ["eat","tea","tan","ate","nat","bat"];
    const result = groupAnagrams(input);

    // Convert inner arrays to sets to ignore order
    const sorted = result.map(group => new Set(group));

    expect(sorted).toEqual([
      new Set(["eat","tea","ate"]),
      new Set(["tan","nat"]),
      new Set(["bat"])
    ]);
  });

  test("handles empty input", () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  test("handles single word", () => {
    expect(groupAnagrams(["hello"])).toEqual([["hello"]]);
  });

  test("handles repeated words", () => {
    const result = groupAnagrams(["abc","cba","abc"]);
    const sets = result.map(group => new Set(group));

    expect(sets).toEqual([
      new Set(["abc", "cba", "abc"])
    ]);
  });

  test("handles no anagrams (all unique)", () => {
    const result = groupAnagrams(["a","b","c"]);
    // Result can be in any order
    const sets = result.map(group => new Set(group));
    expect(sets).toEqual([
      new Set(["a"]),
      new Set(["b"]),
      new Set(["c"])
    ]);
  });
});
