import {Product} from './product';

export class Bike extends Product {

    color : string;
    
    constructor(name : string, price : number, inStock : boolean, salesPoints : string[], color : string) {
        super(name, price, inStock, salesPoints);
        this.color = color;
    }

    getDetails() : string {
        return ` 
            ${super.getDetails()}
            Color : ${this.color}
        `;
    }
}