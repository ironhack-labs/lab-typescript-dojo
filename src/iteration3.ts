//
// Iteration 3 | Classes
//

// 3.1 - Create the class BankAccount

class BankAccount {
  balance: number = 0;
  accountHolder: string = "";

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
  }

  getBalance(): number {
    return this.balance;
  }

  // 3.2 - Add new methods to the class BankAccount
  
  deposit(amount: number): number | string {
    if (amount <= 0) {
      return `Please provide a valid amount.`;
    }
    return (this.balance += amount);
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return `Please provide a valid amount.`;
    } else if (amount > this.balance) {
      return `Insufficient funds.`;
    }
    return (this.balance -= amount);
  }
}
