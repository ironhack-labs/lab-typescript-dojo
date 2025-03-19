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

  deposit(amount: number): number | string {
    if (amount <= 0) {
      return "Please provide a valid amount";
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number | string {
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
const account = new BankAccount("Markus");

console.log(account.deposit(6500));
console.log(account.withdraw(4000));
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(1000));
console.log(account.getBalance());
