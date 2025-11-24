const { summaryRanges } = require('../../js/summaryRanges');

describe('summaryRanges()', () => {

test("basic example", () => {
  expect(summaryRanges([0,1,2,4,5,7])).toEqual(["0->2", "4->5", "7"]);
});

test("mixed singles and ranges", () => {
  expect(summaryRanges([1,3,4,5,7])).toEqual(["1", "3->5", "7"]);
});

test("empty input", () => {
  expect(summaryRanges([])).toEqual([]);
});

test("single element", () => {
  expect(summaryRanges([9])).toEqual(["9"]);
});

test("all singles", () => {
  expect(summaryRanges([2,4,6])).toEqual(["2","4","6"]);
});

});
