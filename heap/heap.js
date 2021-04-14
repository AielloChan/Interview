function swap(arr, i, j) {
  console.log(i, j)
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function adjustBigHeap(arr, i, len) {
  const maxIdx = len - 1
  const current = arr[i]
  const leftChildIdx = 2 * i + 1
  const leftChild = arr[leftChildIdx]
  const rightChildIdx = 2 * i + 2
  const rightChild = arr[rightChildIdx]
  if (i > maxIdx) return
  if (leftChildIdx <= maxIdx && leftChild > current) {
    swap(arr, leftChildIdx, i)
    adjustBigHeap(arr, leftChildIdx, len)
  }
  if (rightChildIdx <= maxIdx && rightChild > current) {
    swap(arr, rightChildIdx, i)
    adjustBigHeap(arr, rightChildIdx, len)
  }
  if (i != 0) {
    adjustBigHeap(arr, i - 1, len)
  }
}

function bigHeap(arr) {
  for (let i = arr.length; i > 0; i--) {
    const lastParentIdx = Math.ceil(i / 2) - 1
    adjustBigHeap(arr, lastParentIdx, i)
    swap(arr, 0, i - 1)
  }
  return arr
}

const result = bigHeap([2, 4, 7, 8, 3, 9, 2, 8, 3])

console.log(result);