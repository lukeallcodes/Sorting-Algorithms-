function mergeSort(arr) {
  // Base case: an array of 0 or 1 elements is already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Divide the array in half and recursively sort each half
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  // Merge the two sorted halves
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  // Concatenate any remaining elements from the left or right half
  return result.concat(left.slice(i)).concat(right.slice(j));
}
