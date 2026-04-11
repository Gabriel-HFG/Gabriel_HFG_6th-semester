function pairElement(string) {
  let dnaArr = [];
  let leters = [...string];
  for (let leter of leters) {
    if (leter === "A") {
      dnaArr.push(["A","T"])
    } if (leter === "T") {
      dnaArr.push(["T","A"])
    } if (leter === "C") {
      dnaArr.push(["C","G"])
    } if (leter === "G") {
      dnaArr.push(["G","C"])
    }
  }
  return dnaArr
}

console.log(pairElement("ATCGA"))
