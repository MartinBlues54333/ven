// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Main function to run the calculator
function calculator() {
    let keepCalculating = true;
    while (keepCalculating) {
        // Prompt the user to enter the operation and numbers
        const operation = prompt("Enter operation (+, -, *, /) or 'exit' to quit:");
        if (operation === 'exit') {
            keepCalculating = false;
            break;
        }
        const number1 = parseFloat(prompt("Enter first number:"));
        const number2 = parseFloat(prompt("Enter second number:"));

        // Perform the selected operation
        let result;
        switch (operation) {
            case '+':
                result = add(number1, number2);
                break;
            case '-':
                result = subtract(number1, number2);
                break;
            case '*':
                result = multiply(number1, number2);
                break;
            case '/':
                result = divide(number1, number2);
                break;
            default:
                result = "Invalid operation";
        }

        // Display the result
        console.log(`Result of ${number1} ${operation} ${number2} = ${result}`);
    }
}

// Run the calculator
calculator();
