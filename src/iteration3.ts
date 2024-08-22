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
        if (amount <= 0) {return "Please provide a valid amount"}
        else {return this.balance += amount}
    }

    withdraw(amount: number): number | string {
        if (amount <= 0) {return "Please provide a valid amount"}
        else if (amount > this.balance) {return "Insufficient funds"}
        else {return this.balance -= amount}
    }
}

let MyBankAccount = new BankAccount("Sven");

console.log(MyBankAccount.getBalance());
console.log(MyBankAccount.deposit(100));
console.log(MyBankAccount.withdraw(30));



