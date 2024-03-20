// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Test case
const string = "hello world";
console.log("Reversed string:", reverseString(string));
