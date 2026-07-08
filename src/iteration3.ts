//
// Iteration 3 | Classes
//


/*

### 3.1 - Create the class `BankAccount`

- This class should have two properties (also known as fields): 
    - `balance` (number), with an initial value of `0`.
    - `accountHolder` (string), with no initial value. This will be the name of the account holder.
- Implement a `constructor()` method:
    - This method should take 1 argument: `accountHolder` (string).
    - Your constructor method should use this argument to initialize the property `accountHolder` (i.e., `this.accountHolder = accountHolder`).
- Implement the method `getBalance()`:
    - This method takes zero arguments
    - It should return the current balance.
*/


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
        if(amount <= 0) {
            return "Please provide a valid amount";
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number | string {
        if(amount <= 0) {
            return "Please provide a valid amount";
        }
        if(amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        return this.balance;
    }
} 


const myAccount = new BankAccount("Alice");
console.log(myAccount.getBalance());    

/*
Next, we will add some more methods to our class `BankAccount`

- Implement the method `deposit()`:
    - This method should take 1 argument: `amount` (number).
    - If `amount` is less than or equal to zero, return the message: `Please provide a valid amount`.
    - If `amount` is greater than zero, add the amount to the current balance and return the new balance.

- Implement the method `withdraw()`:
    - This method should take 1 argument: `amount` (number).
    - If `amount` is less than or equal to zero, return the message: `Please provide a valid amount`.
    - If `amount` is greater than the current balance, return the message: `Insufficient funds`.
    - Otherwise, subtract the amount from the current balance and return the new balance.
*/

// usage of methods

console.log(myAccount.deposit(100)); // Output: 100
console.log(myAccount.withdraw(50)); // Output: 50
console.log(myAccount.withdraw(200)); // Output: "Insufficient funds"



