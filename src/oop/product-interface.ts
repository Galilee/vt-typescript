export interface ProductInterface {
    productName: string;
    price : number;
    inStock: boolean;
    salesPoints: string[];
    createdAt ?: Date;
    getDetails() : string;

}