//
// Iteration 3 | Classes
//

class BankAccount {
    balance: number = 0;
    accountHolder: string = "";

    constructor(accountHolder: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    getBalance (): number {
        return this.balance;
    }

    deposit (amount: number): number | string {
        if (amount <= 0) {
            return `Deposit amount must be positive.`;
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw (amount: number): number | string {
        if (amount <= 0) {
            return `Withdrawal amount must be positive.`;
        }
        if (amount > this.balance) {
            return `Insufficient funds.`;
        }
        this.balance -= amount;
        return this.balance;
    }
}

console.log(`--- Bank Account Operations ---`);
const myAccount = new BankAccount("Alice", 1000);
console.log(`Initial balance for ${myAccount.accountHolder}: $${myAccount.getBalance()}`);

