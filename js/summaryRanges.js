/**
 * 🧩 Kata: Summary Ranges
 * You’re given a sorted array of integers with no duplicates.
 * Return a list of range strings summarizing the consecutive numbers.
 */

function summaryRanges(nums) {
  const result = [];

  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(String(start));
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }

  if (start === end) {
    result.push(String(start));
  } else {
    result.push(`${start}->${end}`);
  }

  return result;
}

summaryRanges([0,1,2,4,5,7])    // ["0->2", "4->5", "7"]
summaryRanges([1,3,4,5,7])      // ["1", "3->5", "7"]
summaryRanges([])               // []
summaryRanges([9])              // ["9"]

module.exports = { summaryRanges };
