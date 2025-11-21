const { insertInterval } = require('../../js/insertInterval');

test("basic insertion with merge", () => {
  expect(insertInterval([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]);
});

test("multiple merges", () => {
  expect(
    insertInterval(
      [[1,2],[3,5],[6,7],[8,10],[12,16]],
      [4,9]
    )
  ).toEqual([[1,2],[3,10],[12,16]]);
});

test("new interval inside existing", () => {
  expect(insertInterval([[1,5]], [2,3])).toEqual([[1,5]]);
});

test("no overlap, insert at end", () => {
  expect(insertInterval([[1,2]], [5,6])).toEqual([[1,2],[5,6]]);
});

