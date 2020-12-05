// function binarySearch(array, number) {

//     const middleIndex = Math.floor((array.length - 1) / 2)
//   //   console.log('middle index:', middleIndex)
//   //   console.log('array:', array)

//   if (array[middleIndex] === number) {
//     return array[middleIndex]
//   }
//   if (array.length === 1) {
//     return -1
//   }

//   if (array[middleIndex] > number) {
//     return binarySearch(array.slice(0, -middleIndex))
//   } else {
//     return binarySearch(array.slice(middleIndex - 1, 0))
//   }
// }

// // Refactored Version
function binarySearch(arr, number) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  while (arr[middle] !== number && start <= end) {
    if (number < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === number ? arr[middle] : -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)

console.log(binarySearch([1, 4, 6, 8, 11, 12, 16], 8))
console.log(binarySearch([1, 4, 6, 8, 11, 12, 16], 7))
// console.log(binarySearch([1, 4, 6, 8, 12, 16, 22, 44, 55, 88, 120], 8))
// console.log(binarySearch([1, 4, 6, 8, 12, 16, 22, 44, 55, 88, 120], 7))
