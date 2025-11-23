/**
 * 🧩 Kata: Majority Element
 * Given an array nums, return the element that appears more than ⌊n/2⌋ times 
 * (the length of the array divided by 2. Round down. 
 * Majority element = element that appears more than that number)
 * You are guaranteed that one element always does.
 */

function majorityElement(arr) {
  const counts = {};

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;

    if (counts[num] > arr.length / 2) {
      return num;
    }
  }
}

majorityElement([3,2,3])            // 3
majorityElement([2,2,1,1,1,2,2])    // 2
majorityElement([1])                // 1
majorityElement([8,8,7,7,7])        // 7

module.exports = { majorityElement };
