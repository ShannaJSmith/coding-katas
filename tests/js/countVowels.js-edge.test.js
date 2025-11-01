const { countVowels } = require('../../js/countVowels.js');

describe('Edge cases', () => {
  test("handles phrases with spaces", () => {
    expect(countVowels("A quick brown fox")).toBe(5);
  });

  test("is case-insensitive", () => {
    expect(countVowels("JAVASCRIPT")).toBe(3);
    expect(countVowels("AeIoU")).toBe(5);
  });

  test("handles strings with no alphabetic characters", () => {
    expect(countVowels("12345!@#$%^&*()")).toBe(0);
  });

  test("handles mixed content strings", () => {
    expect(countVowels("H3ll0 World!")).toBe(1);
  });
});
