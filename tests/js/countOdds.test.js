const { countOdds } = require('../../js/countOdds');

describe('countOdds()', () => {
  test('return the count of odd numbers in an array', () => {
    expect(countOdds([1,2,3,4,5])).toBe(3);
  });

  test('returns 0 for array with no odd numbers', () => {
    expect(countOdds([2,4,6])).toBe(0);
  });

  test('returns 0 for empty array', () => {
    expect(countOdds([])).toBe(0);
  });
});
