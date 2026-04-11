function repeatStringNumTimes(string, number) {
  if (number <= 0) {
    return ""
  }
  let newString = ""
  for (let i = 0; i < number; i++)
    newString += string;

  return newString
}
