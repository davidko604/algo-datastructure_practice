function linearSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([1, 4, 6, 8, 12, 16], 8))
console.log(linearSearch([1, 4, 6, 8, 12, 16], 7))
