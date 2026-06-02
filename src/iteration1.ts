// challenge-01.ts

// 1. Add types to these variables
let productName:string = "Laptop";
let price:number = 999.99;
let isAvailable:boolean = true;
let categories:string[] = ["Electronics", "Computers"];

// 2. Add types to this function
function formatPrice(amount:number):string {
    return `$${amount.toFixed(2)}`;
}

// 3. Add types to this function
function calculateTax(price:number , taxRate:number):number {
    return price * taxRate;
}
