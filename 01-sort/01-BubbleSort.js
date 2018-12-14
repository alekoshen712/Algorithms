import { swap } from "../until";

function BubbleSort(arr) {
  let swapped = true;
  let n = arr.length;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1);
        swapped = true;
      }
    }
    n--;
  }
}

function BubbleSortByNearlyOrderedArr(arr) {
  let newn = 1;
  let n = arr.length;
  while (newn > 0) {
    newn = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1);
        newn = i;
      }
    }
    // 记录最后一次的交换位置,在此之后的元素在下一轮扫描中均不考虑
    n = newn;
  }
}
