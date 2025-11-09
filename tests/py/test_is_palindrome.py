import unittest
from is_palindrome import is_palindrome


class TestIsPalindrome(unittest.TestCase):
    def test_basic_palindromes(self):
        self.assertTrue(is_palindrome("racecar"))
        self.assertTrue(is_palindrome("madam"))
        self.assertTrue(is_palindrome("level"))

    def test_case_insensitivity(self):
        self.assertTrue(is_palindrome("RaceCar"))
        self.assertTrue(is_palindrome("MadAm"))

    def test_spaces_ignored(self):
        self.assertTrue(is_palindrome("taco cat"))
        self.assertTrue(is_palindrome("A man a plan a canal Panama"))

    def test_non_palindromes(self):
        self.assertFalse(is_palindrome("hello"))
        self.assertFalse(is_palindrome("python"))
        self.assertFalse(is_palindrome("palindrome"))

    def test_single_character(self):
        self.assertTrue(is_palindrome("a"))

    def test_empty_string(self):
        self.assertTrue(is_palindrome(""))

    
if __name__ == "__main__":
    unittest.main()
