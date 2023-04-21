function quickSort(arr, low, high) {
  if (low < high) {
    // Choose a pivot index and partition the array around it
    let pivotIndex = partition(arr, low, high);
    
    // Recursively sort the two sub-arrays on each side of the pivot
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  let pivot = arr[high];
  let i = low - 1;
  
  // Iterate through the array, moving elements smaller than pivot to the left
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  
  // Swap the pivot into its correct position
  swap(arr, i + 1, high);
  
  // Return the index of the pivot
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
