import { swap } from "../until";
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 寻找[i, n)区间里的最小值
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    swap(arr, minIdx, i);
  }
}

// 优化选择排序
function selectionSortAdvance(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let minIdx = left;
    let maxIdx = right;
    if (arr[minIdx] > arr[maxIdx]) swap(arr, minIdx, maxIdx);
    for (let i = left + 1; i < right; i++) {
      if (arr[i] < arr[minIdx]) minIdx = i;
      if (arr[i] > arr[maxIdx]) maxIdx = i;
    }
    swap(arr, left, minIdx);
    swap(arr, right, maxIdx);
    left++;
    right--;
  }
}
