const { twoSum, twoSumBruteForce } = require('../../js/twoSum');

describe('Edge cases and invalid inputs', () => {

  test('returns empty array if nums is not an array', () => {
    expect(twoSum(null, 5)).toEqual([]);
    expect(twoSumBruteForce(undefined, 5)).toEqual([]);
    expect(twoSum('string', 5)).toEqual([]);
  });

  test('returns empty array if sum is not a number', () => {
    expect(twoSum([1, 2, 3], null)).toEqual([]);
    expect(twoSumBruteForce([1, 2, 3], 'a')).toEqual([]);
  });

  test('returns empty array if array is empty', () => {
    expect(twoSum([], 5)).toEqual([]);
    expect(twoSumBruteForce([], 5)).toEqual([]);
  });

  test('returns empty array if array has only one number', () => {
    expect(twoSum([3], 3)).toEqual([]);
    expect(twoSumBruteForce([3], 3)).toEqual([]);
  });

  test('works with zeros and negative numbers', () => {
    expect(twoSum([0, -1, 1], 0)).toEqual([1, 2]);
    expect(twoSumBruteForce([0, -1, 1], 0)).toEqual([1, 2]);
  });

});
