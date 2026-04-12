function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter((item) => {
    for (let item2 of arr2) {
      if (item === item2) {
        return false
      }
    }
    return true
  })
  let newArr2 = arr2.filter((item) => {
    for (let item2 of arr1) {
      if (item === item2) {
        return false
      }
    }
    return true
  })
  newArr1.push(newArr2)
  return newArr1.flat()
}

//Much simpler CharGPT version:

function diffArray(arr1, arr2) {
  return [
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
  ];
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))
