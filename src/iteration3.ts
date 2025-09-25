//
// Iteration 3 | Classes
//Base class
export class BankAccount1 {
    balance: number = 0;
    accountHolder: string;

    constructor(accountHolder: string) {
        this.accountHolder = accountHolder;
    }

    getBalance(): number {
        return this.balance;
    }
}
//Methods with validation
export class BankAccount2 {
    balance: number =0;
    accountHolder: string;

    constructor(accountHolder: string){
        this.accountHolder = accountHolder;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit (amount: number): number | string {
        if  (amount <= 0) return 'Please provide a valid amount';
        this.balance += amount;
        return this.balance;
    } 

    withdraw(amount: number): number | string {
        if (amount <=0 ) return 'Please provide a valid amount';
        if (amount >= this.balance) return 'Insufficient funds';
        this.balance -= amount;
        return this.balance;

    }
    

}

//Test
const acc = new BankAccount2("Alice");
console.log (acc.deposit(100));
console.log (acc.withdraw(30));
console.log (acc.withdraw(3000));