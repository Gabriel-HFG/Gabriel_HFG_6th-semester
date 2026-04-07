function confirmEnding(stringToBeChecked,stringToCheckTo) {
  if (stringToCheckTo === stringToBeChecked.slice(stringToBeChecked.length - stringToCheckTo.length)) {
    return true
  } else {
    return false
  }
}

console.log(confirmEnding("pizza","a"))
