// Function to count occurrences of each word in a string
function countWordOccurrences(str) {
    // Remove punctuation marks and convert to lowercase
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    
    // Split the string into words
    const words = str.split(/\s+/);
    
    // Create an object to store word counts
    const wordCounts = {};

    // Count occurrences of each word
    words.forEach(word => {
        if (word in wordCounts) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    return wordCounts;
}

// Test case: Count word occurrences in a given string
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
console.log("Word occurrences:", countWordOccurrences(text));
