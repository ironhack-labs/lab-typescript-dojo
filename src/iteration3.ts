//
// Iteration 3 | Classes
//

class BankAccount {
  balance: number = 0;
  accountHolder: string = "";
  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount: number): number | string {
    if (amount <= 0) return "Please provide valid amount";
    return this.balance + amount;
  }
  withdraw(amount: number) {
    if (amount <= 0) return "Please provide a valid amount";
    if (amount > this.balance) return "Insufficient funds";
    return this.balance - amount;
  }
}

const myAccount = new BankAccount("john doe");
console.log(`Account Holder: ${myAccount.accountHolder}`);
console.log(`Initial Balance: ${myAccount.getBalance()}`);
