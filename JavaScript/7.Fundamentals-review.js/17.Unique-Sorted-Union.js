function uniteUnique(arr1, ...arrays) {
  let arrayValues = [...arr1];
  let otherArrays = [...arrays.flat()]

  let i=-1;
  for (let item of arrayValues) {
    i++
    arrayValues.splice(i, 1)
    if (arrayValues.includes(item)) {
      arrayValues.splice(arrayValues.indexOf(item), 1)
      arrayValues.splice(i, 0, item)
    } else {
    arrayValues.splice(i, 0, item)
    }
  }

  for (let item of otherArrays) {
    if (arrayValues.includes(item)) {
      continue
    } else {
      arrayValues.push(item)
    }
  }
  return arrayValues
}
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])
