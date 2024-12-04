//
// Iteration 3 | Classes
//

// class BankAccount {
//     balance: number = 0;
//     accountHolder: string;

//     constructor(accountHolder: string){
//         this.accountHolder = accountHolder;
//     }

//     getBalance(): number{
//         return this.balance;
//     }
// }  
// const myAccount = new BankAccount("Alice");
// console.log(`Account Holder: ${myAccount.accountHolder}`);
// console.log(`Initial Balance: ${myAccount.getBalance()}`);

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
        if (amount <= 0) {
            return `Please provide a valid amount`;
        }

        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number | string {
        if (amount <= 0) {
            return `Please provide a valid amount`;
        }
        if (amount > this.balance) {
            return `Insufficient funds`;
        }

        this.balance -= amount;
        return this.balance;
    }
}


const myAccount = new BankAccount("Alice");

// // Deposit money
// console.log(myAccount.deposit(100)); 
// console.log(myAccount.deposit(-50));

// // Check balance
// console.log(myAccount.getBalance()); 

// // Withdraw money
// console.log(myAccount.withdraw(50)); 
// console.log(myAccount.withdraw(100)); 
// console.log(myAccount.withdraw(-20)); 
