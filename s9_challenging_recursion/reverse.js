// Write a recursive function which accepts a string and returns a new string in reverse.

// Example Outputs
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(string) {
  let newString = ''
  if (string.length === 0) {
    return newString
  }
  newString = string[string.length - 1] + reverse(string.slice(0, -1))
  return newString
}

console.log(reverse('rithmschool'))
