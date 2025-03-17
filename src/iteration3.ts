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
    if (amount <= 0) return 'Please provide a valid amount';

    this.balance += amount;

    return this.getBalance();
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) return 'Please provide a valid amount';
    if (amount > this.balance) return 'Insufficient funds';

    this.balance -= amount;

    return this.getBalance();
  }
}

const bankAccount = new BankAccount('Alice');
console.log(bankAccount.getBalance()); // 0

console.log(bankAccount.deposit(100)); // 100
console.log(bankAccount.deposit(-100)); // 'You cannot deposit a negative amount'

console.log(bankAccount.withdraw(50)); // 50
console.log(bankAccount.withdraw(51)); // 'Insufficient funds'
