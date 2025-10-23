<?php
/**
 * 🧩 Kata: arraySum
 * Description: Returns the sum of all numeric values in an array.
 */

function arraySum(array $arr) {
    $sum = 0;
    foreach ($arr as $value) {
        if (is_numeric($value)) {
            $sum += $value;
        }
    }
    return $sum;
}

// function arraySum(array $arr): int {
//     return array_sum($arr);
// }

print_r(arraySum([1, 2, 3, 4])); // 10
echo "\n";

echo arraySum([1, 2, 3]); // 6
echo "\n";
