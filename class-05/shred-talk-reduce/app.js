'use strict';


// reduce doesn't mutate the original array
const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((acc, value, idx) => {
//     console.log('acc', acc);
//     console.log('value', value);
//     console.log('index', idx);
//     console.log('===========');
//     return acc += value;
// }, 0);

// console.log('-----------');
// console.log(sum);


let people = [
    { name: 'Fred', role: 'Developer' },
    { name: 'Suzy', role: 'Developer' },
    { name: 'Gina', role: 'Manager' },
    { name: 'Jim', role: 'Support' }
];


const developerObj = people.reduce((acc, currentValue) => {
    // console.log(acc);
    if (currentValue.role === 'Developer') {
        acc.push(currentValue);
    }
    return acc;
}, [])

console.log(developerObj);