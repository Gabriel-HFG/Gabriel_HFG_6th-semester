function largestOfAll(arrOfArr) {
  let largestNumArr = []
  for (let arr of arrOfArr) {
    let largestNum = Math.max(...arr);
    largestNumArr.push(largestNum)
  }
  return largestNumArr
}
