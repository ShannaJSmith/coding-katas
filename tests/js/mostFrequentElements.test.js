const { mostFrequentElements } = require('../../js/mostFrequentElements');

describe('mostFrequentElements()', () => {
  test('returns the k most frequent elements', () => {
    expect(mostFrequentElements([1,1,1,2,2,3], 2)).toEqual([1,2]); // toEqual because order doesn't matter
    expect(mostFrequentElements([4,4,4,6,6,2,2,2,3], 2)).toEqual([4,2]);
  });

  test('handles case where multiple numbers have same frequency', () => {
    const result = mostFrequentElements([1,2,3,4,5,6], 3); // Any 3 numbers are acceptable
    expect(result.length).toBe(3); // Check that 3 elements are returned
    result.forEach(num => { // Check that each returned number is from the original array
      expect([1,2,3,4,5,6]).toContain(num);
    });
  });

  test('handles empty array input', () => {
    expect(mostFrequentElements([], 2)).toEqual([]);
  });
});
