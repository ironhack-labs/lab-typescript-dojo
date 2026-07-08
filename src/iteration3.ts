//
// Iteration 3 | Classes
//

class BankAccount{
    accountHolder
    balance: number
    constructor(accountHolder:string){
        this.accountHolder = accountHolder
         this.balance = 0
       

    }
    getBalance(){
        return this.balance

    }
    deposit(amount:number){
        if(amount <= 0){
            return "Please provide a valid amount"
        }else{
            const newBalance = amount + this.balance
            return newBalance
        }

        

    }
    withdraw(amount:number){
        if(amount <= 0){
            return "Please provide a valid amount"
        } else if(amount>this.balance){
            return "Insufficient funds"
        }else{
            return this.balance - amount
        }

    }
    
}

//Implement the method withdraw():

// This method should take 1 argument: amount (number).
// If amount is less than or equal to zero, return the message: Please provide a valid amount.
// If amount is greater than the current balance, return the message: Insufficient funds.
// Otherwise, subtract the amount from the current balance and return the new balance.