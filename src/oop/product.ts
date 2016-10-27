import {ProductInterface } from './product-interface';

export class Product implements ProductInterface {
    
    productName: string;
    price : number;
    inStock: boolean;
    salesPoints: string[];

    constructor(productName : string, price : number, inStock : boolean, salesPoints : string[]) {
        this.productName = productName;
        this.price = price;
        this.inStock = inStock;
        this.salesPoints = salesPoints
    }

    getDetails() : string {
        return `
            Name : ${this.productName}
            Price : ${this.price}
            In stock : ${this.inStock}
            Sales points : ${ this.salesPoints.join(',')}`
    }
}