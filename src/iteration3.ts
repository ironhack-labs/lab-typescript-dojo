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
    } else {
      this.balance += amount;
      return this.balance;
    }
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return `Please provide a valid amount`;
    }
    if (amount > this.balance) {
      return `Insufficient funds`;
    }

    this.balance -= amount;
    return this.balance;
  }
}


const account = new BankAccount("Alice");

console.log("Account Holder:", account.accountHolder);
console.log("Initial Balance:", account.getBalance());

console.log("Deposit 100:", account.deposit(100));
console.log("Balance after deposit:", account.getBalance());

console.log("Withdraw 50:", account.withdraw(50));
console.log("Balance after withdraw:", account.getBalance());

console.log("Withdraw 100 (should fail):", account.withdraw(100));
console.log("Deposit -20 (invalid):", account.deposit(-20));