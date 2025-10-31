"""
🧩 Kata: is_palindrome
Write a function that checks if a given string is a palindrome. 
A palindrome is a word, phrase, or sequence that reads the same forward and backward, ignoring spaces and capitalization.
"""

def is_palindrome(text):
    modified = text.lower().replace(" ", "")  # remove spaces and convert to lowercase  
    return modified == modified[::-1]         # check if the string is the same forwards and backwards 

print(is_palindrome("racecar"))                              # True
print(is_palindrome("A man a plan a canal Panama"))          # True
print(is_palindrome("hello"))                                # False