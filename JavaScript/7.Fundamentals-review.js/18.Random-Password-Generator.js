function generatePassword(lenOfPass) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("")
  let password = [];
  for (let i = 0; i < lenOfPass; i++) {
    let char = characters[Math.floor((Math.random() * characters.length) + 1)]
    password.push(char)
  }
  return password.join("")
}

let password = generatePassword(50)
console.log(`Generated password: ${password}`)
