const { reverseWords, reverseWordsIgnoreSpaces } = require('../../js/reverseWords');

describe('reverseWords() — keeps original spaces', () => {

  test('example test cases', () => {
    expect(reverseWords("hello world")).toEqual("world hello");
    expect(reverseWords("I love coding")).toEqual("coding love I");
    expect(reverseWords("one")).toEqual("one");
    expect(reverseWords("")).toEqual("");
  });

  test('handles multiple spaces', () => {
    expect(reverseWords("  hello   world  ")).toEqual("  world   hello  ");
  });

});

describe('reverseWordsIgnoreSpaces() — ignores extra spaces', () => {

  test('example test cases', () => {
    expect(reverseWordsIgnoreSpaces("hello world")).toEqual("world hello");
    expect(reverseWordsIgnoreSpaces("I love coding")).toEqual("coding love I");
    expect(reverseWordsIgnoreSpaces("one")).toEqual("one");
    expect(reverseWordsIgnoreSpaces("")).toEqual("");
  });

  test('handles multiple spaces', () => {
    expect(reverseWordsIgnoreSpaces("  hello   world  ")).toEqual("world hello");
  });

});
