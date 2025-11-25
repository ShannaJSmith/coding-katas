const { shortestDist } = require('../../js/shortestDist');

describe('shortestDist()', () => {

test("basic", () => {
  expect(shortestDist("loveleetcode", "e"))
    .toEqual([3,2,1,0,1,0,0,1,2,2,1,0]);
});

test("all the same character", () => {
  expect(shortestDist("eeee", "e")).toEqual([0,0,0,0]);
});

test("single character", () => {
  expect(shortestDist("a", "a")).toEqual([0]);
});
});
