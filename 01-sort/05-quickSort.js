import { swap, generateRandomInt } from "../until";

function _partition(arr, left, right) {
  // 随机化,否则如果为近乎有序的数组会退化为O(n^2)的算法
  swap(arr, left, generateRandomInt(left, right));
  let v = arr[left],
    j = left;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < v) {
      swap(arr, j + 1, i);
      j++;
    }
  }
  swap(arr, left, j);
  return j;
}

// 双路快速排序, 处理了数组中有许多重复的数的问题
function _partition2(arr, left, right) {
  swap(arr, left, generateRandomInt(left, right));
  let v = arr[left];
  let i = left + 1,
    j = right;
  while (true) {
    while (i <= right && arr[i] < v) i++;
    while (j >= left + 1 && arr[j] > v) j--;
    if (i > j) break;
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, left, j);
  return j;
}

function _quickSort(arr, left, right) {
  if (left >= right) return;
  let p = _partition(arr, left, right);
  _quickSort(arr, left, p - 1);
  _quickSort(arr, p + 1, right);
}

function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
}
