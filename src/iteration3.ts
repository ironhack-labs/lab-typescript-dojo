//
// Iteration 3 | Classes
//3.2 - Add new methods to the class BankAccount
/*Next, we will add some more methods to our class BankAccount

Implement the method deposit():

This method should take 1 argument: amount (number).
If amount is less than or equal to zero, return the message: Please provide a valid amount.
If amount is greater than zero, add the amount to the current balance and return the new balance.
Implement the method withdraw():

This method should take 1 argument: amount (number).
If amount is less than or equal to zero, return the message: Please provide a valid amount.
If amount is greater than the current balance, return the message: Insufficient funds.
Otherwise, subtract the amount from the current balance and return the new balance. */

class BankAccount {
  balance: number = 0;
  accountHolder: string;

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): string | number {
    if (amount <= 0) {
      return "Please provide a valid amount.";
    } else {
      this.balance += amount;
      return this.balance;
    }
  }

  withdraw(amount: number): string | number {
    if (amount <= 0) {
      return "Please provide a valid amount.";
    } else if (amount > this.balance) {
      return "Insufficient funds.";
    } else {
      this.balance -= amount;
      return this.balance;
    }
  }
}
