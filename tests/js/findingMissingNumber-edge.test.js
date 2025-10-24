const { findingMissingNumber } = require('../../js/findingMissingNumber');

describe('Edge cases', () => {

  test('returns 0 for empty arrays', () => {
    expect(findingMissingNumber([])).toBe(0);
  });

  test('handles single-element arrays', () => {
    expect(findingMissingNumber([1])).toBe(0); // no number is missing
    expect(findingMissingNumber([2])).toBe(1); // missing number is 1
  });

  // copilot suggested
  test('handles large arrays', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1).filter(num => num !== 5678);
    expect(findingMissingNumber(arr)).toBe(5678);
  });

  // For Fun
  test('handles more than one missing number by returning the first missing number', () => {
    expect(findingMissingNumber([1, 2, 4, 6])).toBe(3); // 3 is the first missing number
  });

  // could do negative numbers but the question assumes the sequence starts at 1.
  // test('handles arrays with negative numbers', () => {})
});
