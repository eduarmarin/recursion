//---------------------------------------------fibonacci

// function fibonacci(n) { 
//     if (n <= 1) { 
//         return n; 
//     } 
//     return fibonacci(n - 1) + fibonacci(n - 2); 
// } 
  
// // Printing n fibonacci sequence 
// n = 5;
  
// for (let i = 0; i < n; i++) { 
//     console.log(fibonacci(i)); 
// };

//---------------------------------------------merge

function mergeSort(input) {
  const {length:arraySize} = input;
  if (arraySize < 2) return input;
  const mid = Math.floor(arraySize/2);
  const sortedLeftArray = mergeSort(input.slice(0,mid));
  const sortedRightArray = mergeSort(input.slice(mid, arraySize));
  return merge(sortedLeftArray, sortedRightArray);
}

function merge (left, right){
  let result = []
  while(left.length && right.length){
    if(left[0]< right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }
  /* Either left/right array will be empty or both */
  return [...result, ...left, ...right];
}

console.log(mergeSort([5,3,8,10,4,1]))