function getIndexToIns(array, number) {
  if (array === []) {return 0}
  array.sort((a, b) => a - b)
  let index = array.findIndex((item) => item >= number)
  if (index === -1) {return array.length}
  return index
}

console.log(getIndexToIns([3, 10, 5], 11))
