// Binary search function to find the index of a target element in a sorted array
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);

        // If the middle element is the target, return its index
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            // If the middle element is less than the target, search the right half
            left = mid + 1;
        } else {
            // If the middle element is greater than the target, search the left half
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetElement = 13;

// Find the index of the target element in the sorted array
const index = binarySearch(sortedArray, targetElement);

// Display the result
if (index !== -1) {
    console.log(`The target element ${targetElement} is found at index ${index}.`);
} else {
    console.log(`The target element ${targetElement} is not found in the array.`);
}
