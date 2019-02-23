// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// SOLUTION

function sumAll(arr) {
    let sum = 0;
    arr.sort((a,b)=>a-b);
    for(let i=arr[0]; i<=arr[1]; i++){
      sum += i;
    }
    return sum;
  }
  
  sumAll([1, 4]);