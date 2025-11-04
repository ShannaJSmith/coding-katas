const { countOdds } = require('../../js/countOdds');

describe('Edge cases', () => {
  test('handle negative odd numbers', () => {
    expect(countOdds([-1,-5,1,2,3])).toBe(4); // -1, -5, 1, 3 are odd
  }); 

  test('handle array with all odd numbers', () => {
    expect(countOdds([-3, -1, 1, 3, 5])).toBe(5);
  });
});
