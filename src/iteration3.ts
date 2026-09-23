//
// Iteration 3 | Classes
//
class BankAccount {
    balance: number = 0
    accountHolder: string

    constructor(accountHolder: string) {
        this.accountHolder = accountHolder
    }

    getBalance = () : number => {
       return this.balance 
    }

    depoit = (amount:number) : string | number => {
        if(amount <= 0) return "Please provide a valid amount"

        this.balance += amount
        return this.balance
    }

    withdraw = (amount:number) : string | number => {
        if(amount <= 0) return "Please provide a valid amount"
        if(amount >= this.balance) return "Insifficient funds"

        this.balance -= amount
        return this.balance
    }
}
