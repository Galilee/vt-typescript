"use strict";
var product_1 = require('./product');
var bike_1 = require('./bike');
var myProduct = new product_1.Product('my product', 200, true, ['bordeaux']);
console.log(myProduct.getDetails());
var bike = new bike_1.Bike('my bike', 200, true, ['lormont'], 'red');
console.log(bike.getDetails());
