//
// Iteration 3 | Classes
// Next, we will add some more methods to our class BankAccount

// Implement the method deposit():

// This method should take 1 argument: amount (number).
// If amount is less than or equal to zero, return the message: Please provide a valid amount.
// If amount is greater than zero, add the amount to the current balance and return the new balance.
// Implement the method withdraw():

// This method should take 1 argument: amount (number).
// If amount is less than or equal to zero, return the message: Please provide a valid amount.
// If amount is greater than the current balance, return the message: Insufficient funds.
// Otherwise, subtract the amount from the current balance and return the new balance.


class BankAccount {
    balance: number = 0;
    accountHolder: string = '';

    constructor(accountHolder:string){
        this.accountHolder = accountHolder;
    }

    getBalance(){
        return this.balance;
    }

    deposit(amount : number){
        if (amount <= 0){
            return 'Please provide a valid amount';
        }
            return this.balance += amount;
        
    }

    withdraw(amount : number){
        if (amount <= 0){
            return 'Please provide a valid amount';
        }
        if (amount > this.balance){
            return 'insuficient funds'
        }
        
        return this.balance -= amount;
    }
}

const bankAccount = new BankAccount("Olga");
console.log(bankAccount);

const balance = bankAccount.getBalance();
console.log(balance);

const deposit = bankAccount.deposit(100)
console.log(deposit,bankAccount);

const withdraw = bankAccount.withdraw(25)
console.log(withdraw,bankAccount)



