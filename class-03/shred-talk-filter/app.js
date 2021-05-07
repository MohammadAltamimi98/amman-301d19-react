'use strict';

// forEach
// loops through an array
// no return 

// map
// loops through an array
// returns an array of values with same length of the original array

// filter
// loops through 
// it filters or returns values based on a criteria

let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

let evens = numbers.filter(currentValue => {
    return (currentValue % 2 === 0);
});

let evensMap = numbers.map(currentValue => {
    if (currentValue % 2 === 0) { return currentValue };
});

console.log(evens);
console.log(evensMap);


let people = [
    { name: 'John', role: 'Dad' },
    { name: 'Cathy', role: 'Mom' },
    { name: 'Zach', role: 'Kid' },
    { name: 'Allie', role: 'Kid' },
];


const parents = people.filter(person => person.role !== 'Kid');

console.log(parents);
console.log(people);
