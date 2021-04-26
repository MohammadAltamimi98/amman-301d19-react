'use strict';

const arrOfNum = [1, 2, 3, 4, 5];

const newArr = arrOfNum.map(currentValue => {
    return currentValue += 1;
});


const evenArr = arrOfNum.map(num => {
    if (num % 2 === 0) {
        return num;
    }
});

// console.log(newArr);
console.log(evenArr);