const { majorityElement } = require('../../js/majorityElement');

describe('majorityElement()', () => {

test("simple majority", () => {
  expect(majorityElement([3,2,3])).toBe(3);
});

test("majority in mixed array", () => {
  expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
});

test("single element", () => {
  expect(majorityElement([1])).toBe(1);
});

});
