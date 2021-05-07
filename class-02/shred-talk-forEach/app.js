'use strict';

const pizzaArr = [
    'alferdo',
    'peperoni',
    'vegetarian',
    'salami'
];

// for (let index = 0; index < pizzaArr.length; index++) {
//     console.log(pizzaArr[index]);
// }

// an arrow function with a body
// pizzaArr.forEach((pizza) => {
//     console.log(pizza);
// });

// the short way
// pizzaArr.forEach(pizza => console.log(pizza));


const arrOfNum = [2, 3, 4, 5];
const newArr = [];
const evenNum = [];

// arrOfNum.forEach((num, index) => {
//     console.log(index);
//     newArr.push(num += 1);
// });

arrOfNum.forEach((num, index) => {
    console.log(index);
    newArr.push(num += 1);
});

arrOfNum.forEach(num => {
    if (num % 2 === 0) {
        evenNum.push(num);
    }
});

// console.log(arrOfNum);
console.log(newArr);
console.log(evenNum);