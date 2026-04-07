let count = 0;
function cardCounter(card) {
  if ([2,3,4,5,6].includes(card)) {
    ++count
  } else if ([7,8,9].includes(card)) {

  } else if ([10,"J","Q","K","A"].includes(card)) {
    --count
  }

  if (count > 0) {
    return `${count} Bet`
  } else if (count <= 0) {
    return `${count} Hold`
  }
}

cardCounter(2)
cardCounter(3)
cardCounter(4)
cardCounter(5)
cardCounter(6)
console.log(count)
