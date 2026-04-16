let originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
let filteredArray = [...originalArray]
filteredArray = filteredArray.filter(item => item.id > 1).map((item) => ({...item}));
console.log(originalArray)

filteredArray[0].id = 4;

console.log(originalArray);
console.log(filteredArray);
