<?php
/**
 * 🧩 Kata: Longest String without Repeating Characters
 * Given a string s, return the length of the longest substring that contains no repeated characters.
 */

    function longestUniqueSubstr(string $s): int
    {
        $lastIndex = [];
        $max = 0;
        $start = 0;

        $length = strlen($s);
        for ($i = 0; $i < $length; $i++) {
            $char = $s[$i];
            if (isset($lastIndex[$char]) && $lastIndex[$char] >= $start) {
                // Move start right after previous occurrence
                $start = $lastIndex[$char] + 1;
            }
            $lastIndex[$char] = $i;
            $currentLen = $i - $start + 1;
            if ($currentLen > $max) $max = $currentLen;
        }

        return $max;
    }

// Test cases
echo longestUniqueSubstr("abcabcbb"); // 3    "abc"
echo "\n";
echo longestUniqueSubstr("bbbbb");    // 1    "b"
echo "\n";
echo longestUniqueSubstr("pwwkew");   // 3    "wke"
echo "\n";
echo longestUniqueSubstr("");         // 0
echo "\n";
echo longestUniqueSubstr("au");       // 2


