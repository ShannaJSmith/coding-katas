<?php
/**
 * 🧩 Kata: Longest Word Length in a Sentence
 * Given a string $str containing words separated by spaces, return the length of the longest word.
 * Words are separated by one or more spaces. Ignore empty strings caused by extra spaces.
 * Punctuation counts as part of a word. If the string is empty or has no words, return 0
 */


function longestWordLength(string $str): int {
    $words = preg_split('/\s+/', trim($str));

    if (count($words) === 1 && $words[0] === '') {
        return 0;
    }

    $maxLen = 0;

    foreach ($words as $word) {
        $len = strlen($word);
        if ($len > $maxLen) {
            $maxLen = $len;
        }
    }

    return $maxLen;
}

// Test cases
echo longestWordLength("Hello world") . "\n";               // 5
echo longestWordLength("PHP is pretty powerful") . "\n";    // 8 ("powerful")
echo longestWordLength("   lots   of   spaces   ") . "\n";  // 6 ("spaces")
echo longestWordLength("") . "\n";                          // 0
echo longestWordLength("a bb ccc dddd") . "\n";             // 4


