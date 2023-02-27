// Prompt the user to add 10 numbers
let inputString = prompt("Please enter 10 numbers separated by commas:");

// Convert the input string into an array of numbers
let inputArray = inputString.split(",").map(Number);

// Merge Sort algorithm
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return mergedArray.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}

// Call the mergeSort function and display the sorted array
const sortedArray = mergeSort(inputArray);
console.log(sortedArray);
