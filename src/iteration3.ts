//
// Iteration 3 | Classes
//

// 3.1

class Bankaccount {
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
      return "Please provide a valid amount";
    } else {
      this.balance += amount;
      return this.balance;
    }
  }

  withdraw(amount: number): string | number {
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
