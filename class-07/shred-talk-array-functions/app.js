'use strict';

// split
const helloWorld = 'Hello World';
const newArr = helloWorld.split(' ');
// const newArr = helloWorld.split('o');
// const newArr = helloWorld.split('');
console.log(newArr);

// join
const joinedArr = newArr.join('');
console.log(joinedArr);


// slice
const slicesOfPizzas = [
    'peperoni',
    'alfredo',
    'vegetarian',
    'pine-apple'
];

const vegetarianSlice = slicesOfPizzas.slice(2, 3);
const alfredoSlice = slicesOfPizzas.slice(1, 2);
const greedySlice = slicesOfPizzas.slice(1, 3);
// const hatemsSlice = slicesOfPizzas.slice(3);
const hatemsSlice = slicesOfPizzas.slice(slicesOfPizzas.length - 2);
const weirdSlice = slicesOfPizzas.slice(-1);

const mostGreedySlices = slicesOfPizzas.slice();

// console.log(vegetarianSlice);
// console.log(alfredoSlice);
// console.log(greedySlice);
// console.log(hatemsSlice);
// console.log(weirdSlice);
// console.log(mostGreedySlices);

// splice

let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 2); // remove the c and d
arr.splice(3, 0, 99); // add 99 between c and d
console.log(arr);