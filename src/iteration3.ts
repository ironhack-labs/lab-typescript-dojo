//
// Iteration 3 | Classes
//
class BankAccount {
    private balance: number = 0;

    constructor(private accountHolder: string) {}

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): number | string {
        if (amount <= 0) return `Please provide a valid amount`;

        return (this.balance += amount);
    }

    withdraw(amount: number): number | string {
        if (amount <= 0) return `Please provide a valid amount`;
        if (amount > this.balance) return `Insufficient funds`;

        return (this.balance -= amount);
    }
}


