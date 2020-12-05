export const swap = (arr: number[], index1: number, index2: number) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const testArray = [4, 2, 53, 23, 13, 56, 14, 105, 7]

// Big O of bubble sort is generally n^2 if data is not sorted.
// Use bubble sort if data is nearly sorted

const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let noSwaps = true
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return array
}

// console.log('testArray:', bubbleSort(testArray))
