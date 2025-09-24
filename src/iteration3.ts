//
// Iteration 3 | Classes
//
class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
    this.balance = 0;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): number | string {
    if (amount <= 0) {
      return "Please provide a valid number";
    }
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return "Please provide a valid number";
    }
    else if (amount > this.balance) {
      return "insufficient funds";
    }
    this.balance -= amount;
    return this.balance;
  }
}
