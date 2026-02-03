//
// Iteration 3 | Classes
//
class BankAccount {
    balance: number = 0
    accountHolder: string

    constructor(accountHolder:string) {
        this.accountHolder = accountHolder

    }

    getBalance():number {
        return this.balance
    }

    deposit(amount:number): string | number {
        if(amount <= 0){
            return 'Please provide a valid amount'
        } else {
            return this.balance += amount
        }
    }

    withdraw(amount:number): string | number{
        if(amount <= 0){
            return 'Please provide a valid amount'
        } else if (amount > this.balance){
            return 'INsufficient funds'
        } else {
            return this.balance -= amount
        }
    }
}

const result = new BankAccount('Igor')
console.log(result.getBalance())
result.deposit(10)
console.log(result.getBalance())
result.withdraw(5)
console.log(result.getBalance())
