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

const myAccount = new BankAccount("Me");
console.log(myAccount.accountHolder);
console.log(myAccount.balance);
console.log(myAccount.getBalance());
console.log(myAccount.deposit(-5));
console.log(myAccount.deposit(600));
console.log(myAccount.withdraw(0));
console.log(myAccount.withdraw(800));
console.log(myAccount.withdraw(400));