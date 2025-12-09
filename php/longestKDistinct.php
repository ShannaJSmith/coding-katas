<?php
/**
 * 🧩 Kata: Longest Substring With Exactly K Distinct Characters
 * Given a string s and an integer k, return the length of the longest substring that contains exactly k 
 * distinct characters. If no such substring exists, return 0.
 */


function longestKDistinct(string $str, int $k): int {
    if ($k <= 0) return 0;

    $count = [];      // char => frequency
    $start = 0;
    $maxLen = 0;

    $len = strlen($str);

    for ($end = 0; $end < $len; $end++) {
        $char = $str[$end];
        $count[$char] = ($count[$char] ?? 0) + 1;

        while (count($count) > $k) {
            $left = $str[$start];
            $count[$left]--;
            if ($count[$left] === 0) unset($count[$left]);
            $start++;
        }

        if (count($count) === $k) {
            $currLen = $end - $start + 1;
            if ($currLen > $maxLen) $maxLen = $currLen;
        }
    }

    return $maxLen;
}




// Test cases
echo longestKDistinct("eceba", 2) . "\n";     // 3  "ece"

echo longestKDistinct("aa", 1) . "\n";        // 2  "aa"

echo longestKDistinct("abcadcacacaca", 3) . "\n";  // 11 "cadcacacac"

echo longestKDistinct("abc", 4) . "\n";        // 0 (no substring has 4 distinct chars)

echo longestKDistinct("", 1) . "\n";          // 0

echo longestKDistinct("aabbcc", 2) . "\n";    // 4 "aabb" or "bbcc"

