// Import the functions
const { twoSum, twoSumBruteForce } = require('../../js/twoSum');

describe('twoSum (Map-based solution)', () => {

  test('returns correct indices for normal input', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('works with negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('returns empty array when no solution exists', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });

  test('handles duplicate numbers correctly', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('works with large arrays efficiently', () => {
    const arr = Array.from({ length: 100000 }, (_, i) => i);
    expect(twoSum(arr, 199997)).toEqual([99998, 99999]);
  });

});

describe('twoSumBruteForce (nested loops solution)', () => {

  test('returns correct indices for normal input', () => {
    expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('works with negative numbers', () => {
    expect(twoSumBruteForce([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('returns empty array when no solution exists', () => {
    expect(twoSumBruteForce([1, 2, 3], 7)).toEqual([]);
  });

  test('handles duplicate numbers correctly', () => {
    expect(twoSumBruteForce([3, 3], 6)).toEqual([0, 1]);
  });

  test('works with small arrays', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    expect(twoSumBruteForce(arr, 1997)).toEqual([998, 999]);
  });

});
