
function getLowestValues(arrOfArrs) {
  // Initialize an array to store the lowest values
  const lowestValues = [];

  // Iterate over the array of arrays
  for (let i = 0; i < arrOfArrs.length; i++) {
    // Sort the current array in ascending order
    const sortedArray = arrOfArrs[i].sort((a, b) => a - b);
    console.log(sortedArray)

    // Initialize an array to store the lowest value(s) in the current 
    //array that have not already been included in the lowestValues array
    const lowestValueInArray = [];

    // Find the lowest value(s) in the current array that have not already 
    // been included in the lowestValues array
    for (let j = 0; j < sortedArray.length; j++) {
      if (!lowestValues.includes(sortedArray[j])) {
        lowestValueInArray.push(sortedArray[j]);
      }
    }

    // Add the lowest value(s) in the current array to the lowestValues array
    lowestValues.push(...lowestValueInArray);

    // If no values were added, add the next lowest value from the current array
    if (lowestValueInArray.length === 0) {
      for (let j = 0; j < sortedArray.length; j++) {
        if (!lowestValues.includes(sortedArray[j])) {
          lowestValues.push(sortedArray[j]);
          break;
        }
      }
    }
  }

  // Initialize an array to store the final output
  const output = [];


  // Return the final output
  return output;
}

// Example usage
const arrOfArrs = [[1, 2, 3, 4], [3, 4, 5], [2, 6, 7]];
const lowestValues = getLowestValues(arrOfArrs);
console.log(lowestValues); // Output: [[1, 3], [4, 5], [2, 6, 7]]


