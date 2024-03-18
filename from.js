// Function to remove duplicate elements from an array while preserving the original order
function removeDuplicates(arr) {
    const uniqueArray = [];
    const seen = new Set();

    // Iterate through the array elements
    for (const item of arr) {
        // If the element is not in the set, add it to the result array and set
        if (!seen.has(item)) {
            seen.add(item);
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

// Test case
const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7];
console.log("Array with duplicates:", numbers);
console.log("Array with duplicates removed:", removeDuplicates(numbers));
