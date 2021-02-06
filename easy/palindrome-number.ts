// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x != 0)) {
        return false;
    }
    
    let rev = 0;
    let lastDig = 0;
    while (x > rev) {
        lastDig = x % 10;
        rev = rev * 10 + lastDig;
        x = (x-lastDig) / 10;
    }
    
    return x === rev || x === (rev - lastDig) / 10;
};