<?php
/**
 * 🧩 Kata: Count Vowels
 * Description: Count the Number of Vowels in a String
 * Write a function that takes a string and returns how many vowels (a, e, i, o, u, case-insensitive) appear.
 */

function countVowels(string $s): int {
    $count = 0;
    $vowels = ['a', 'e', 'i', 'o', 'u'];

    $len = strlen($s);
    for ($i = 0; $i < $len; $i++) {
        if (in_array(strtolower($s[$i]), $vowels, true)) {
            $count++;
        }
    }

    return $count;
}

echo countVowels("Hello World") . "\n";      // 3 (e, o, o)
echo countVowels("abc") . "\n";              // 1 (a)
echo countVowels("ABC") . "\n";              // 1 (A)
echo countVowels("aBcDeF") . "\n";           // 2 (a, e)
echo countVowels("123!?!") . "\n";           // 0
echo countVowels("PHP is FUN!") . "\n";      // 2 (i, U)