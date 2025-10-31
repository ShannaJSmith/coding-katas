<?php
/**
 * 🧩 Kata: sum_of_unique
 * Write a function that returns the sum of numbers in an array only if they appear exactly once.
 * Return 0 in empty cases or when no unique values exist
 * Example: [1, 2, 3, 2] should return 4 (1 + 3)
 */

function sumOfUnique(array $nums): int
{
    $counts = array_count_values($nums);
    $sum = 0;

    foreach ($counts as $num => $count) {
        if ($count === 1) {
            $sum += $num;
        }
    }

    return $sum;
}
// Test cases
echo sumOfUnique([1, 2, 3, 2]); // 4
echo "\n";
echo sumOfUnique([5, 5, 5, 5]); // 0
echo "\n";
echo sumOfUnique([]);           // 0

