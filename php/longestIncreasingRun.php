<?php
/**
 * 🧩 Kata: Longest Increasing Consecutive Run
 * You are given an array of integers. Return the length of the longest run of strictly increasing 
 * consecutive numbers. Increasing means each next number is greater than the previous.
 * If the array is empty, return 0. A single number counts as a run of length 1.
 */


function longestIncreasingRun(array $arr): int {
    $num = count($arr);
    if ($num === 0) return 0;

    $maxLen = 1;
    $curr = 1;

    for ($i = 1; $i < $num; $i++) {
        if ($arr[$i] > $arr[$i - 1]) {
            $curr++;
        } else {
            $curr = 1;
        }

        if ($curr > $maxLen) {
            $maxLen = $curr;
        }
    }

    return $maxLen;
}


// Test cases
echo longestIncreasingRun([1, 2, 3, 4, 5]) . "\n";          // 5 — whole array is strictly increasing
echo longestIncreasingRun([5, 4, 3, 2, 1]) . "\n";          // 1 — everything decreases, so longest run is any single number
echo longestIncreasingRun([1, 3, 2, 4, 6, 5, 7]) . "\n";    // 3 — longest strictly increasing run is [2,4,6]
echo longestIncreasingRun([10, 20, 30, 5, 6, 7, 8]) . "\n"; // 4 — [5,6,7,8]
echo longestIncreasingRun([]) . "\n";                       // 0 (empty array)
echo longestIncreasingRun([42]) . "\n";                     // 1 


