//
// Iteration 3 | Classes
//node dist/iteration3.js

class BankAccount {
    balance: number = 0;
    accountHolder: string = ''

    constructor(customer: string) {
        this.balance = this.balance;
        this.accountHolder = customer;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): number | string {
        if (amount <= 0) return 'Please provide a valid amount'
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number | string {
        if (amount <= 0) {
            return 'Please provide a valid amount'
        } else if (amount > this.balance) {
            return 'Insufficient funds.'
        }
        this.balance -= amount;
        return this.balance;
    }

}

/* const customer1: BankAccount = new BankAccount('Petra');
const customer2: BankAccount = new BankAccount('Paula');
customer1.deposit(15)
customer2.deposit(25)

const result1: number | string = customer1.withdraw(50)
const result2: number | string = customer2.withdraw(10)
console.log(result1);
console.log(result2); */
