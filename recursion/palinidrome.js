// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  // if even number, first half equals second half
  // if odd number, half before middle character equals second half

  if (string.length === 1) {
    console.log(true)
    return true
  }

  let leftChar = string[0]
  let rightChar = string[string.length - 1]

  if (leftChar !== rightChar) {
    console.log(false)
    return false
  }

  return isPalindrome(string.slice(1, -1))
}

// Alternate method
// function isPalindrome(str) {
//   if (str.length === 1) return true
//   if (str.length === 2) return str[0] === str[1]
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//   return false
// }

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false
