function reverseString(string) {
  let reversedWordLeters = []
  for (let char of string) {
    reversedWordLeters.unshift(char)
  }
  let reversedWord = reversedWordLeters.join("")
  console.log(reversedWord)
  return reversedWord
}
