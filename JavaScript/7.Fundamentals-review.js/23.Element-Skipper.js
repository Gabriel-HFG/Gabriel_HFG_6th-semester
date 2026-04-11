function dropElements(arr,func) {
  for (let element of arr) {
    if (func(element)) {
      let index = arr.indexOf(element)
      let result = arr.slice(index)
      return result
    } else {
      }
    }
  return []
  }

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
