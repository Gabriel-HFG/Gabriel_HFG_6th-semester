function mutation(array) {
  let first = array[0].toLowerCase();
  let second = array[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}
