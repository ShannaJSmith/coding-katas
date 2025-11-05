const { firstNonRepeat } = require('../../js/firstNonRepeat');

describe('firstNonRepeat()', () => {

  test('returns empty string if all characters repeat', () => {
    expect(firstNonRepeat("aabbcc")).toBe("");
  });

  test('returns the first character that does not repeat', () => {
    expect(firstNonRepeat("swiss")).toBe("w");
  });

  test('is case-sensitive', () => {
    expect(firstNonRepeat("sSwiss")).toBe("S");
  });

  test('handles empty string input', () => {
    expect(firstNonRepeat("")).toBe("");
  });

  test('handles single character string', () => {
    expect(firstNonRepeat("x")).toBe("x");
  });

});
