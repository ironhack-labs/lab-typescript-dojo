//
// Iteration 3 | Classes
//

class BankAccount {
    balance: number = 0;
    accountHolder: string;

    constructor(accountHolder: string) {
        this.accountHolder = accountHolder;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): number | string {
        if (amount <= 0) return "Please provide a valid amount.";
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number | string {
        if (amount <= 0) return "Please provide a valid amount.";
        if (amount > this.balance) return "Insufficient funds.";
        this.balance -= amount;
        return this.balance;
    }
}

const myAccount = new BankAccount("Hamid");
console.log(myAccount.getBalance());
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(50));
console.log(myAccount.getBalance())
