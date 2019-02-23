// Intermediate Algorithm Scripting: Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

//SOLUTION
function diffArray(arr1, arr2){
    // First join the two arrays together
    let newArr = arr1.concat(arr2);
    // use filter to sort through the array.  Use index of to search for a duplicate of the item starting at one index above the first.
    return newArr.filter(e => newArr.indexOf(e, newArr.indexOf(e)+1) === -1);
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);