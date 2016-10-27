// product example
let productName : string;
let price: number;
let inStock: boolean;
let salesPoints : string[];


productName = 'pc'; // ok
//productName = 2; // error

salesPoints = ['lormont', 'merignac', 'bordeaux']; // ok
//salesPoints = [true, 'bordeaux']; // error


function details(productName : string, price : number, inStock : boolean, salesPoints : string[]) : void {
    console.log(`
        Name : ${productName}
        Price : ${price}
        In stock : ${inStock}
        Sales points : ${ salesPoints.join(',')}
    `);
}

details('bicke', 12, false, ['lormont']);

