function pyramid(char,rows,booleanValue) {
  let string = [];
  if (booleanValue === false) {
    for (let i = 1, charNum = 1; i <= rows;i++, charNum += 2) {
      string.push(`${" ".repeat(rows - i)}${char.repeat(charNum)}`)
    }
  let pyramid = string.join("\n")
  return "\n" + string.join("\n") + "\n";
  } else {
  if (booleanValue === true) {
    for (let i = 1, charNum = (rows * 2 - 1); i <= rows;i++, charNum -= 2) {
      string.push(`${" ".repeat(i - 1)}${char.repeat(charNum)}`)
    }
  return "\n" + string.join("\n") + "\n";
    }
  }
}
console.log(pyramid("o", 4, false))

console.log(pyramid("p", 5, true))
