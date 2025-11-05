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
      return "Please provide a valid amount.";
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return "Please provide a valid amount.";
    }
    if (amount > this.balance) {
      return "Insufficient funds.";
    }
    this.balance -= amount;
    return this.balance;
  }
}

const myAccount = new BankAccount("Kelechi");

console.log("Account holder:", myAccount.accountHolder); // Kelechi
console.log("Initial balance:", myAccount.getBalance()); // 0

console.log("Deposit 1000:", myAccount.deposit(1000)); // 1000
console.log("Withdraw 300:", myAccount.withdraw(300)); // 700
console.log("Withdraw 1000:", myAccount.withdraw(1000)); // "Insufficient funds."
console.log("Final balance:", myAccount.getBalance()); // 700
