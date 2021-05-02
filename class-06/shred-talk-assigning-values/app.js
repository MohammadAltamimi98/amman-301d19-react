'use strict';

let tamim = 28;
let hatim = tamim;

// console.log(tamim);
// console.log(hatim);
// hatim += 1;
// console.log(hatim);
// console.log(tamim);

let myName = 'tamim';
let yourName = myName;
yourName = 'hatim'

// console.log(myName);
// console.log(yourName);

let carAvanti = { type: 'Avanti', model: '1997' };
let carCopy = carAvanti;

// console.log(carAvanti);
// console.log(carCopy);

carCopy.type = 'mercedes';


// console.log(carAvanti);
// console.log(carCopy);

let arrOfNum = [1, 2, 3, 4, 5];
let arrOfNumTwo = arrOfNum;

console.log(arrOfNum);
console.log(arrOfNumTwo);

arrOfNumTwo.push(6);

console.log(arrOfNum);
console.log(arrOfNumTwo);

let functionOne = () => {
    return 2;
}

console.log(functionOne);

let value = functionOne();

console.log(value);