const { reverseWords, reverseWordsIgnoreSpaces } = require('../../js/reverseWords');

describe('Edge cases — reverseWords()', () => {

  test('non-string input returns empty string', () => {
    expect(reverseWords(null)).toEqual('');
    expect(reverseWords(undefined)).toEqual('');
    expect(reverseWords(123)).toEqual('');
    expect(reverseWords({})).toEqual('');
  });

  test('empty string returns empty string', () => {
    expect(reverseWords("")).toEqual('');
  });

  test('single word string', () => {
    expect(reverseWords("word")).toEqual("word");
  });

});

describe('Edge cases — reverseWordsIgnoreSpaces()', () => {

  test('non-string input returns empty string', () => {
    expect(reverseWordsIgnoreSpaces(null)).toEqual('');
    expect(reverseWordsIgnoreSpaces(undefined)).toEqual('');
    expect(reverseWordsIgnoreSpaces(123)).toEqual('');
    expect(reverseWordsIgnoreSpaces({})).toEqual('');
  });

  test('empty string returns empty string', () => {
    expect(reverseWordsIgnoreSpaces("")).toEqual('');
  });

  test('single word string', () => {
    expect(reverseWordsIgnoreSpaces("word")).toEqual("word");
  });

  test('multiple spaces with single word', () => {
    expect(reverseWordsIgnoreSpaces("   word   ")).toEqual("word");
  });

});
