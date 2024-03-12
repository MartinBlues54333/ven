// Function to generate the Fibonacci sequence up to a specified number of terms
function fibonacciSequence(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciSeq = fibonacciSequence(numberOfTerms);

// Display the result
console.log(`Fibonacci sequence up to ${numberOfTerms} terms:`, fibonacciSeq);
