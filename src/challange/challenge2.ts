// challenge-02.ts

// 1. Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
}

// 2. User interface
interface User {
    id: number;
    email: string;
    name?: string;        // optional
    createdAt: Date;
}

// 3. Function using Product interface
function describeProduct(product: Product): string {
    return `${product.name}: $${product.price}`;
}

// --- Test ---
const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999.99,
    inStock: true,
    categories: ["Electronics", "Computers"]
};

const user: User = {
    id: 42,
    email: "alice@example.com",
    name: "Alice",
    createdAt: new Date()
};