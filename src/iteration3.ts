//
// Iteration 3 | Classes
//

class bankAccount {
  balance: number = 0;
  accountHolder: string = "";

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
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
