export function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
