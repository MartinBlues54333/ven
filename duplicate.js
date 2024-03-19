// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    const uniqueArray = [];

    // Loop through each element in the array
    for (let element of arr) {
        // Check if the element is not already in the uniqueArray
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}

// Test case
const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
console.log("Original array:", numbers);
console.log("Array after removing duplicates:", removeDuplicates(numbers));
