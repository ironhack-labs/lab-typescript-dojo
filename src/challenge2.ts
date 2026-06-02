// challenge-02.ts

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
    name?: string; // optional
    createdAt: Date;
}

// Example Product
const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999.99,
    inStock: true,
    categories: ["Electronics", "Computers"]
};

// Example User
const user: User = {
    id: 42,
    email: "alice@example.com",
    createdAt: new Date()
};

// 3. Function that takes a Product and returns a string description
function describeProduct(product: Product): string {
    return `${product.name}: $${product.price}`;
}

// Test
console.log(describeProduct(laptop));