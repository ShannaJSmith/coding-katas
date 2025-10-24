const { findingMissingNumber } = require('../../js/findingMissingNumber');

describe('findingMissingNumber()', () => {

  test('return missing number in array', () => {
    expect(findingMissingNumber([1, 2, 4, 5, 6])).toBe(3); // use .toBe() for primitive values
    expect(findingMissingNumber([2, 3, 1, 5])).toBe(4);
  });

  test('return 0 when no number is missing', () => {
    expect(findingMissingNumber([1, 2, 3, 4, 5])).toBe(0);
    expect(findingMissingNumber([1, 2, 3])).toBe(0);
  });

  test('handles unsorted arrays', () => {
    expect(findingMissingNumber([5, 3, 1, 2])).toBe(4);
    expect(findingMissingNumber([4, 2, 6, 1, 3])).toBe(5);
  });
});
