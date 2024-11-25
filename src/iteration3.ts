//
// Iteration 3 | Classes
//

class BankAccount {
  balance: number;
  accountHolder: string;

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
    this.balance = 0;
  }

  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): number | string {
    if (amount <= 0) {
      return "Please provide a valid amount";
    } else {
      this.balance += amount;
      return this.balance;
    }
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return "Please provide a valid amount";
    } else if (amount > this.balance) {
      return "Insufficient funds";
    } else {
      this.balance -= amount;
      return this.balance;
    }
  }
}

const result1 = new BankAccount("Sam");
console.log(result1);
