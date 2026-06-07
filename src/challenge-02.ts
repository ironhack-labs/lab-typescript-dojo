// 1. Create a Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
}
 
// 2. Create a User interface
interface User {
    id: number;
    email: string;
    name?: string;
    createdAt: Date;
}
 
// 3. Create a function that takes a Product and returns a string description
function describeProduct(product: Product): string {
    return `${product.name}: $${product.price}`;
}

export { Product, User, describeProduct };
