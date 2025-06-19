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
  deposit(amount: number) {
    if (amount <= 0) {
      return "Please provide a valid amount";
    }
    if (amount >= 0) {
      this.balance += amount;
      return this.balance;
    }
  }
  withdrawal(amount: number) {
    if (amount <= 0) {
      return "Please provide a valid amount";
    }
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    return this.balance;
  }
}
console.log(new BankAccount("Alice").getBalance());
//post to bank account
console.log(new BankAccount("Bob").deposit(100));
//withdraw from bank account
console.log(new BankAccount("Bob").withdrawal(50));
