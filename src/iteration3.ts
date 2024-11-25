//
// Iteration 3 | Classes
//

class BankAcount {
  balance: number = 0;
  accountHolder: string;

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
  }
  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    this.balance -= amount;
  }
}
