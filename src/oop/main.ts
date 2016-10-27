import {Product} from './product';
import {Bike} from './bike';

let myProduct = new Product('my product', 200, true, ['bordeaux']);

console.log(myProduct.getDetails());


let bike = new Bike('my bike', 200, true, ['lormont'], 'red');

console.log(bike.getDetails());

