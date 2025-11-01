/**
 * 🧩 Kata: Longest Consective Sequence
 * Given an unsorted array of integers, return the length of the longest run of consecutive numbers.
 * Rules: No sorting the array.
 * No cheat sorting.
 * Linear-ish logic expected.
 */

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    // only start counting when it's the start of a sequence
    if (!set.has(num - 1)) {
      let length = 1;
      let current = num;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

// Method using sorting (less optimal)
// function longestConsecutive(nums) {
//   if (nums.length === 0) return 0;

//   nums.sort((a, b) => a - b);

//   let longest = 1;
//   let current = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1] + 1) {
//       current++;
//       longest = Math.max(longest, current);
//     } else if (nums[i] !== nums[i - 1]) {
//       current = 1;
//     }
//   }

//   return longest;
// }

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([])); // 0


module.exports = { longestConsective };
