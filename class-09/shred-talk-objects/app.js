const person = {
    'name': 'John',
    'role': 'Dad',
    'interests': ['Coaching', 'Teaching'],
};


for (const key in person) {
    // console.log('key: ', key);
    // console.log('value: ', person[key]);
}

// Object.keys
// console.log(Object.keys(person)); // will return an array of keys

// Object.values
// console.log(Object.values(person)); // will return an array of values

const arrOfValues = Object.values(person);

// arrOfValues.forEach(value => {
//     if (typeof (value) === 'string' || typeof (value) === 'number') {
//         console.log(value);
//     } else {
//         value.forEach(nestedValue => {
//             console.log(nestedValue);
//         });
//     }
// })

// Object.entries
// console.log(Object.entries(person));

