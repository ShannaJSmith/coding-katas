const { firstNonRepeat } = require('../../js/firstNonRepeat');

describe('Edge cases', () => {
  test('handles strings with special characters', () => {
    expect(firstNonRepeat("!@#!!@#a")).toBe("a");
  });
  
  test('handles strings with numbers', () => {
    expect(firstNonRepeat("1122334455b6677")).toBe("b");
  });   

  test('handles very long strings efficiently', () => {
    const longString = "a".repeat(10000) + "b" + "a".repeat(10000);
    expect(firstNonRepeat(longString)).toBe("b");
  });
  
  test('handles strings with unicode characters', () => {
    expect(firstNonRepeat("あいうえおあい")).toBe("う");
  }); 
});
