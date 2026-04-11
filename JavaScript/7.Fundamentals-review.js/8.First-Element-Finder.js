function findElement(array,afunction) {
  for (let element of array) {
    if (afunction(element) === true) {
      return element
    }
  }
  return undefined
}
