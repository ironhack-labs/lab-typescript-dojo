//
// Iteration 3 | Classes
//
class BankAccount {
    balance: number = 0
    accountHolder: string;

    constructor (accountHolderName: string) {
        this.accountHolder = accountHolderName
    }

    getBalance(): number{
        return this.balance
    }
    deposit(amount: number):string|number{
        if (amount <= 0) {
            return "Please provide a valid amount"
        }
        this.balance += amount
        return this.balance
    }
    withdraw(amount: number): number|string{
        if (amount > 0 && amount < this.balance) {
            this.balance -= amount
            return this.balance
        }

        return "Insuficient funds"
    
    }
}


