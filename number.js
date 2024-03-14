// Function to calculate the factorial of a non-negative integer
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Test the factorial function
const number1 = 5;
const number2 = 0;
const number3 = -3;

console.log(`Factorial of ${number1}:`, factorial(number1));
console.log(`Factorial of ${number2}:`, factorial(number2));
console.log(`Factorial of ${number3}:`, factorial(number3));
