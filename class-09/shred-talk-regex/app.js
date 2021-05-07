'use strict';

const str = 'The rain in Spain falls mainly in the plain';

// const pattern = /in/g;
const pattern = /in/;

const matchFoundObject = str.match(pattern);
console.log(typeof (matchFoundObject));
console.log(matchFoundObject);