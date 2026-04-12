function destroyer(arr, ...valuesToRemove) {
  return [...arr.filter((item) => !valuesToRemove.includes(item))]
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
