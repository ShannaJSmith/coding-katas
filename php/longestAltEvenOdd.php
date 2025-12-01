<?php
/**
 * 🧩 Kata: Longest String without Repeating Characters
 * Given an array of integers, return the length of the longest subarray where the numbers alternate between even and odd.
 * “Even → Odd → Even → Odd…” is valid
 * “Odd → Even → Odd → Even…” is valid
 * Two evens or two odds in a row break the streak
 * A single number counts as length 1
 */

function longestAltEvenOdd(array $arr): int {
    $length = count($arr);
    if ($length === 0) return 0;

    $maxLen = 1;
    $current = 1;

    // helper to check even/odd
    $isEven = function($n) {
        return $n % 2 === 0;
    };

    for ($i = 1; $i < $length; $i++) {
        if ($isEven($arr[$i]) !== $isEven($arr[$i - 1])) {
            $current++;
        } else {
            $current = 1;
        }

        if ($current > $maxLen) {
            $maxLen = $current;
        }
    }

    return $maxLen;
};

// Test cases
echo longestAltEvenOdd([1, 2, 3, 4, 5]);    // 5  
echo "\n";
echo longestAltEvenOdd([2, 4, 6]);          // 1  
echo "\n";
echo longestAltEvenOdd([4, 5, 10, 11, 12]); // 4  
echo "\n";
echo longestAltEvenOdd([]);                 // 0  
echo "\n";
echo longestAltEvenOdd([7]);                // 1  
echo "\n";

