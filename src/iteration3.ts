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
      return `Please provide a valid amount`;
    }
    if (amount > this.balance) {
      return `Insufficient funds`;
    }

    this.balance -= amount;
    return this.balance;
  }
}

const account1 = new BankAccount("Alice");
console.log(account1.getBalance());

const account2 = new BankAccount("Bob");
console.log(account2.accountHolder);

const account3 = new BankAccount("Charlie");

const result7 = account3.deposit(100);
console.log(result7);

const result8 = account3.withdraw(50);
console.log(result8);

const result9 = account3.withdraw(100);
console.log(result9);

const result10 = account3.deposit(-20);
console.log(result10);
