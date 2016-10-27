"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var product_1 = require('./product');
var Bike = (function (_super) {
    __extends(Bike, _super);
    function Bike(name, price, inStock, salesPoints, color) {
        _super.call(this, name, price, inStock, salesPoints);
        this.color = color;
    }
    Bike.prototype.getDetails = function () {
        return " \n            " + _super.prototype.getDetails.call(this) + "\n            Color : " + this.color + "\n        ";
    };
    return Bike;
}(product_1.Product));
exports.Bike = Bike;
