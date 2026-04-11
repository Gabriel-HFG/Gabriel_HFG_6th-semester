function findLongestWordLength(string) {
    let lengthOfEachWord = [];
    let words = string.split(" ");
    for (let item of words) {
        lengthOfEachWord.push(item.length)}
    return words[lengthOfEachWord.indexOf(Math.max(...lengthOfEachWord))].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

