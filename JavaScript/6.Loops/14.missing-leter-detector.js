function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let current = str.charCodeAt(i);
    let next = str.charCodeAt(i + 1);

    // If there's a gap in the alphabet
    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }

  return undefined;
}

//Charcodes is the binary numerical value of things
//charcodeat gets the number and fromcharcode gets the letter from the number
