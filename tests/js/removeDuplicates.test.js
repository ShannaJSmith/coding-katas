const { removeDuplicates } = require('../../js/removeDuplicates');

describe('removeDuplicates()', () => {
  test('return number of unique occurences', () => {
    expect(removeDuplicates([1,1,2,2,3])).toBe(3);
  });

  test('modify array in-place to have unique elements at the start', () => {  
    const arr = [0,0,1,1,1,2,2,3,3,4];
    const uniqueCount = removeDuplicates(arr);
    const uniqueElements = arr.slice(0, uniqueCount);
    expect(uniqueElements).toEqual([0,1,2,3,4]);
  });
});
