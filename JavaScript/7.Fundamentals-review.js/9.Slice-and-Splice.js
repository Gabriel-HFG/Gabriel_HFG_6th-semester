function frankenSplice(arr1,arr2,index) {
  let addedArr = []
  addedArr.push(...arr2)
  addedArr.splice(index,0,...arr1)
  return addedArr
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
