import {Bike} from '../oop/bike';
import {render} from './render';

let bike = new Bike('my bike', 200, true, ['lormont'], 'red');

render('product', bike.getDetails());




