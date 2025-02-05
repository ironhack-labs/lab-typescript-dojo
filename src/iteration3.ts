//
// Iteration 3 | Classes
//

class BankAccount {
    balance: number = 0;
    accountHolder: string;
    constructor(accountHolder : string){
        this.accountHolder = accountHolder;
    }
    getBalance() : number{
        return this.balance;
    }
    deposit(amount: number) {
        if(amount > 0){
            return this.balance += amount;
        } else {
            return "Please provide a valid amount"
        }
    }
    withdraw(amount: number){
        if(amount <= 0){
            return 'Please provide a valid amount'
        } else if(amount > this.balance){ 
            return "Insufficient funds"
        } else {
            return this.balance -= amount;
        }
    }
}

const account1 = new BankAccount("Alice");
console.log(account1.deposit(50));
console.log(account1.withdraw(10));
