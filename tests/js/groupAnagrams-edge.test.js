const { groupAnagrams } = require('../../js/groupAnagrams');

describe('Edge cases', () => {
  test('handles strings with different cases', () => {
    expect(groupAnagrams(["Eat", "tea", "Ate", "bat", "Tab"])).toEqual([["Eat", "tea", "Ate"], ["bat", "Tab"]]);
  });

  test('handles strings with special characters', () => {
    expect(groupAnagrams(["@bca", "cab@", "abc!", "!cba"])).toEqual([["@bca", "cab@"], ["abc!", "!cba"]]);
  });
});
