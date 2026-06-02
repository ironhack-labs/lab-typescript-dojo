// challenge-02.ts

// 1. Create a Product interface for:
interface Product{
    id:number;
    name:string;
    price:number;
    inStock:boolean;
    categories:string[]
}
const laptop:Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999.99,
    inStock: true,
    categories: ["Electronics", "Computers"]
};

// 2. Create a User interface for:
interface User{
    id: number;
    email: string;
    name?: string;        // optional
    createdAt: Date;
}
const user:User = {
    id: 42,
    email: "alice@example.com",
    name: "Alice",        // optional
    createdAt: new Date()
};

// 3. Create a function that takes a Product and returns a string description
function describeProduct(product:Product) :string {
    return `${product.name}: $${product.price}`;
}
