const { findTheDifference } = require('../../js/findTheDifference');

describe('findTheDifference()', () => {

test("return the extra character", () => {
  expect(findTheDifference("abcd", "abcde")).toBe("e");
});

test("empty s", () => {
  expect(findTheDifference("", "y")).toBe("y");
});

test("duplicate added", () => {
  expect(findTheDifference("a", "aa")).toBe("a");
});

});
