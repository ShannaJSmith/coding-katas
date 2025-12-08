<?php
/**
 * 🧩 Kata: Longest Balanced Substring of Parentheses
 * Given a string containing only the characters "(" and ")", 
 * return the length of the longest balanced (valid) parentheses substring.
 * A balanced substring is one where every opening parenthesis has a matching closing parenthesis in the correct order.
 */

function longestBalancedParen(string $s): int {
    $stack = [-1]; // base index
    $maxLen = 0;

    $len = strlen($s);

    for ($i = 0; $i < $len; $i++) {
        if ($s[$i] === '(') {
            array_push($stack, $i);
        } else {
            array_pop($stack);

            if (empty($stack)) {
                array_push($stack, $i);
            } else {
                $current = $i - end($stack);
                if ($current > $maxLen) $maxLen = $current;
            }
        }
    }

    return $maxLen;
}



// Test cases
echo longestBalancedParen("(()") . "\n";        // 2
echo longestBalancedParen(")()())") . "\n";     // 4
echo longestBalancedParen("") . "\n";           // 0
echo longestBalancedParen("()(()") . "\n";      // 2
echo longestBalancedParen("((()))") . "\n";     // 6
echo longestBalancedParen("()()") . "\n";       // 4
echo longestBalancedParen(")((((())") . "\n";   // 2

