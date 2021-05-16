'use strict';

const Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.getName = function () { return this.name; };

let person = new Person('Fred', 51);
let personTwo = new Person('Tamim', 28);

// bad code -- references the same thing over and over
function sayName(person) {
    if (person.age >= 50) {
        return person.getName().toUpperCase();
    } else {
        return person.getName().toLowerCase();
    }
}

// console.log(sayName(person));
// console.log(sayName(personTwo));

// better // look it up once and referencing it whenever we need it.
// calling functions is harder on the server than a variable lookup.
// calling a function by a reference is faster
function sayNameBetter(person) {
    const name = person.getName(); // go and lookup for the function named getName() and reference it to the variable name 
    if (person.age >= 50) {
        return name.toUpperCase(); // example of chaining methods, follow up
    } else {
        return name.toLowerCase();
    }

}

// console.log(sayNameBetter(person));

// even better
// ternary operator
function sayNameEvenBetter(person) {
    const name = person.getName();
    return person.age >= 50 ? name.toUpperCase() : name.toLowerCase();
}

console.log(sayNameEvenBetter(person));