"use strict";
var Product = (function () {
    function Product(productName, price, inStock, salesPoints) {
        this.productName = productName;
        this.price = price;
        this.inStock = inStock;
        this.salesPoints = salesPoints;
    }
    Product.prototype.getDetails = function () {
        return "\n            Name : " + this.productName + "\n            Price : " + this.price + "\n            In stock : " + this.inStock + "\n            Sales points : " + this.salesPoints.join(',');
    };
    return Product;
}());
exports.Product = Product;
