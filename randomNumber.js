// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Check if the number is even or odd
if (randomNumber % 2 === 0) {
    console.log(randomNumber + " is even.");
} else {
    console.log(randomNumber + " is odd.");
}
