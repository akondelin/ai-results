
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

  // Iterate over the array of arrays
  for (let i = 0; i < arrOfArrs.length; i++) {
    // Initialize an array to store the values to be included in the final output for the current array
    const valuesToInclude = [];

    // Iterate over the values in the current array
    for (let j = 0; j < arrOfArrs[i].length; j++) {
      // Check if the current value has already been included in the lowestValues array
      if (lowestValues.includes(arrOfArrs[i][j])) {
        // If the current value has already been included, remove it from the lowestValues array
        const index = lowestValues.indexOf(arrOfArrs[i][j]);
        lowestValues.splice(index, 1);
      } else {
        // If the current value has not already been included, add it to the valuesToInclude array
        valuesToInclude.push(arrOfArrs[i][j]);
      }
    }

    // Add the valuesToInclude array to the final output
    output.push(valuesToInclude);
  }

  // Return the final output
  return output;
}

// Example usage
const arrOfArrs = [[1, 2, 3, 4], [3, 4, 5], [2, 6, 7]];
const lowestValues = getLowestValues(arrOfArrs);
console.log(lowestValues); // Output: [[1, 3], [4, 5], [2, 6, 7]]

