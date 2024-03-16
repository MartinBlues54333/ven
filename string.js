// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Compare the string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test cases
const strings = ["racecar", "level", "hello", "A man, a plan, a canal, Panama!"];

// Check if each string is a palindrome and display the result
strings.forEach(str => {
    console.log(`Is "${str}" a palindrome?`, isPalindrome(str));
});
