// Define a class representing a basic calculator
class Calculator {
    // Constructor to initialize the calculator
    constructor() {
        this.result = 0;
    }

    // Method to add numbers
    add(num) {
        this.result += num;
    }

    // Method to subtract numbers
    subtract(num) {
        this.result -= num;
    }

    // Method to multiply numbers
    multiply(num) {
        this.result *= num;
    }

    // Method to divide numbers
    divide(num) {
        if (num === 0) {
            console.log("Error: Cannot divide by zero");
            return;
        }
        this.result /= num;
    }

    // Method to clear the calculator result
    clear() {
        this.result = 0;
    }

    // Method to display the current result
    displayResult() {
        console.log("Current Result:", this.result);
    }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Perform some calculations
calculator.add(5);
calculator.displayResult();

calculator.subtract(2);
calculator.displayResult();

calculator.multiply(3);
calculator.displayResult();

calculator.divide(4);
calculator.displayResult();

calculator.clear();
calculator.displayResult();
