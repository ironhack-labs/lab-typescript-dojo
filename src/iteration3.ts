//
// Iteration 3 | Classes
//

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
      return 'Please provide a valid amount';
    } else {
      this.balance += amount;
      return this.getBalance();
    }
  }

  withdraw(amount: number): string | number {
    const currentBalance = this.getBalance();
    if (amount <= 0) {
      return 'Please provide a valid amount';
    } else if (amount > currentBalance) {
      return 'Insufficient funds';
    } else {
      this.balance -= amount;
      return this.getBalance();
    }
  }
}
