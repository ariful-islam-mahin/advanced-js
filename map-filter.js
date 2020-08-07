const numbers = [3, 6, 2, 7, 12];
// const square = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     square.push(result)
// }
const squares = numbers.map(element => element * element)

console.log(squares);

const bigger = numbers.filter(element => element > 6);
const isThere = numbers.find(element => element > 6)

console.log(bigger, isThere);

