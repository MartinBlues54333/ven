// Function to calculate the sum of all digits in a number
function sumOfDigits(number) {
    let sum = 0;
    // Convert the number to a string to iterate through its digits
    const digits = String(number);
    // Iterate through each digit and add it to the sum
    for (let digit of digits) {
        sum += parseInt(digit);
    }
    return sum;
}

// Test cases
const numbers = [123, 456, 789, 101, 202];

// Calculate and display the sum of digits for each test number
numbers.forEach(number => {
    console.log(`Sum of digits in ${number}:`, sumOfDigits(number));
});
