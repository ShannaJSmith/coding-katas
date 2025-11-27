const { longestTwoDistinct } = require('../../js/longestTwoDistinct');

describe('longestTwoDistinct()', () => {

  test("Longest substring with 2 distinct characters in mixed string", () => {
    expect(longestTwoDistinct("eceba")).toBe(3);           // "ece" 
  });

  test("Longest substring with 2 distinct characters in repeated characters", () => {
    expect(longestTwoDistinct("ccaabbb")).toBe(5);        // "aabbb"
  });

  test("Single character string", () => {
    expect(longestTwoDistinct("a")).toBe(1);
  });

  test("String with three distinct characters, longest substring is 2", () => {
    expect(longestTwoDistinct("abc")).toBe(2);            // "ab" or "bc"
  });

  test("Mixed substring in string with repeats", () => {
    expect(longestTwoDistinct("abaccc")).toBe(4);         // "accc"
  });
});
