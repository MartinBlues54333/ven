// Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Test cases
const min = 10;
const max = 20;
console.log(`Random number between ${min} and ${max}:`, getRandomNumber(min, max));
