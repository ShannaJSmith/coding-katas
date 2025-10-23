/**
 * 🧩 Kata: Two Sum
 * Given an array of numbers and a sum, return the indices
 * of the two numbers that add up to the sum.
 */

function twoSum(nums, sum) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = sum - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return []; // return empty array if no solution found
}

twoSum([2, 7, 11, 15], 9); // answer: [0, 1]

// Alternative solution using brute force (nested loops)

function twoSumBruteForce(nums, sum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === sum) {
        return [i, j];
      }
    }
  }
  return [];
}

twoSumBruteForce([2, 7, 11, 15], 9); // [0, 1]

// comments: less efficient due to O(n^2) time complexity compared to O(n) for the map solution