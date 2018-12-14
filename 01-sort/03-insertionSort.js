function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let e = arr[i];
    // j为元素result[i]合适的插入位置
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}
