function _merge(arr, left, mid, right) {
  let temp = new Array(right - left + 1);
  for (let i = left; i <= right; i++) {
    temp[i - left] = arr[i];
  }
  let i = left,
    j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = temp[j - left];
      j++;
    } else if (j > right) {
      arr[k] = temp[i - left];
      i++;
    } else if (temp[i - left] < temp[j - left]) {
      arr[k] = temp[i - left];
      i++;
    } else {
      arr[k] = temp[j - left];
      j++;
    }
  }
}

function _mergeSort(arr, left, right) {
  if (left >= right) return;
  // if (right - left <= 15) insertionSort()
  let mid = Math.floor((left + right) / 2);
  _mergeSort(arr, left, mid);
  _mergeSort(arr, mid + 1, right);
  if (arr[mid] > arr[mid + 1]) _merge(arr, left, mid, right);
}

function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length - 1);
}
