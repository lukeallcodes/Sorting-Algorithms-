function countingSort(arr, max) {
  let countArr = new Array(max + 1).fill(0);
  let outputArr = new Array(arr.length);
  
  // Count the number of occurrences of each element in arr
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]]++;
  }
  
  // Modify countArr to show the number of elements <= i
  for (let i = 1; i <= max; i++) {
    countArr[i] += countArr[i - 1];
  }
  
  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    outputArr[countArr[arr[i]] - 1] = arr[i];
    countArr[arr[i]]--;
  }
  
  return outputArr;
}
