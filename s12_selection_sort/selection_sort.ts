import { swap } from '../s11_bubble_sort/bubble_sort'

const testArray = [4, 2, 53, 23, 133, 56, 14, 105, 7]

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    if (min < arr[i]) {
      swap(arr, i, minIndex)
    }
  }
  return arr
}

console.log(selectionSort(testArray))
