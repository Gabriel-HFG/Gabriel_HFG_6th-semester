function bouncer(array) {
  let fixedArray = [...array];

  for (let i = fixedArray.length - 1; i >= 0; i--) {
    if (!fixedArray[i]) {
      fixedArray.splice(i, 1);
    }
  }

  return fixedArray;
}
console.log(bouncer([7, "ate", "", false, 9]))
