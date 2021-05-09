'use strict';

const Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.getName = function () { return this.name; };

let person = new Person('Fred', 51);

// bad code -- references the same thing over and over
function sayName(person) {
    if (person.age >= 50) {
        return person.getName().toUpperCase();
    } else {
        return person.getName().toLowerCase();
    }
}

console.log(sayName(person));

// better

function sayNameBetter(person) {

}

console.log(sayNameBetter(person));

// even better

function sayNameEvenBetter(person) {

}

console.log(sayNameEvenBetter(person));