"use strict";
var greet_1 = require('./greet');
var greet_2 = require('./greet');
var person = new greet_1.Person('tarek', 'rjili');
console.log(greet_2.greeter(person));
