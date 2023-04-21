function heapSort(arr) {
  // Build the initial heap
  buildHeap(arr);
  
  // Extract elements from the heap one by one
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the root with the last element
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    
    // Restore the heap property
    heapify(arr, 0, i);
  }
  
  return arr;
}

function buildHeap(arr) {
  let n = arr.length;
  // Start at the last non-leaf node and work backwards
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i, n);
  }
}

function heapify(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    // Swap arr[i] and arr[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    
    // Recursively heapify the affected subtree
    heapify(arr, largest, n);
  }
}
