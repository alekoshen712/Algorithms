import { swap } from "../until";

class MaxHeap {
  data = [];

  constructor(arr) {
    if (Array.isArray(arr)) this.heapify(arr);
  }

  heapify(arr) {
    if (arr.length) {
      this.data.push(...arr);
      for (let i = Math.floor((this.size() - 1 - 1) / 2); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  }

  shiftUp(k) {
    let data = this.data;
    let parentIdx = Math.floor((k - 1) / 2);
    while (k > 0 && data[parentIdx] < data[k]) {
      swap(data, parentIdx, k);
      k = parentIdx;
      parentIdx = Math.floor((k - 1) / 2);
    }
  }

  shiftDown(k) {
    let [data, size] = [this.data, this.size()];
    while (2 * k + 1 < size) {
      let j = 2 * k + 1;
      if (j + 1 < size && data[j + 1] > data[j]) j++;
      if (data[k] >= data[j]) break;
      swap(data, k, j);
      k = j;
    }
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  insert(num) {
    this.data.push(num);
    this.shiftUp(this.data.length);
  }

  extractMax() {
    let data = this.data;
    let size = this.size();
    let ret = data[0];
    if (size === 0) throw Error("The heap is empty!");
    swap(data, 0, size - 1);
    data.splice(size - 1, 1);
    this.shiftDown(0);
    return ret;
  }
}
