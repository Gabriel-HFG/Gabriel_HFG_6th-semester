function titleCase(string) {
  let words = string.split(" ");
  let newString = [];
  for (let word of words) {
    word = (word[0].toUpperCase()) + word.slice(1).toLowerCase();
    newString.push(word)
  }
  return newString.join(" ")
}

console.log(titleCase("I like to code"))
