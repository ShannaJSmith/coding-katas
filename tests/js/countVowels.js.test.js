const { countVowels } = require('../../js/countVowels.js');

describe("countVowels", () => {
  test("counts vowels in regular words", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("javascript")).toBe(3);
  });

  test("returns 0 when there are no vowels", () => {
    expect(countVowels("rhythms")).toBe(0);
    expect(countVowels("WHY")).toBe(0);
  });

  test("handles empty string", () => {
    expect(countVowels("")).toBe(0);
  });

});
