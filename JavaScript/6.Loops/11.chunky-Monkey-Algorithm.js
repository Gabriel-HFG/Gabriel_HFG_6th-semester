function chunkArrayInGroups(array,number) {
  let masterArray = [];

  let copyArray = array.slice()
  while (copyArray.length > 0) {
  let tempArray = [];

    for (let i = 0; i < number && copyArray.length > 0; i++) {
      tempArray.push(copyArray[0])
      copyArray.shift()
    }
  masterArray.push(tempArray);
  }
  return masterArray
}
