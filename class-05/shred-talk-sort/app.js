'use strict';

// sort function sorts an array ascending
// mutates the original array 
const arrNum = [2, 5, 1, -1, 7, 4];
const arrLargeNum = [2, 5, 10, 1, 12, 7, 4];
const arrayOfNames = ["Deema", "mariam", "Dania", "abdelrahman"];
// console.log(arrNum);
// arrNum.sort();
// console.log(arrNum);

// console.log(arrLargeNum); // before sorting
// arrLargeNum.sort();
// // ["2", "5", "10", "1", "12", "7", "4"]
// // A 65
// console.log(arrLargeNum); // after sorting

// const arrayOfNames = ["mariam", "dania", "abdelrahman"];
// const arrayOfNames = ["mariam", "Dania", "abdelrahman"];
// console.log(arrayOfNames);
// arrayOfNames.sort()
// console.log(arrayOfNames);

//[2, 5, 10, 1, 12, 7, 4];
// [2,5,1,10,7,4,12] // after the first loop
// [2,1,5]
//
// arrLargeNum.sort((a, b) => {
//     if (a < b) { // if a is less than b , 
//         return -1; // shift a by a lower index
//     }

//     if (a > b) { // if a is larger than b
//         return 1; // shit a to a higher index
//     }

//     return 0; // they are the same value so keep them as they are
// });


arrLargeNum.sort((a, b) => a - b);
arrNum.sort((a, b) => a - b);

// console.log(arrLargeNum);
console.log(arrNum);


const peopleObj = [
    { name: "batool", position: "TA" },
    { name: "Aseel", position: "student" },
    { name: "Hidaya", position: "ta" },
    { name: "ali baker", position: "student" },
    { name: "Roquia", position: "TA" },
    { name: "Naeem", position: "student" },
];

peopleObj.sort((a, b) => {
    if (a.position.toLocaleLowerCase() === 'ta') {
        return -1;
    }
});

console.log(peopleObj);