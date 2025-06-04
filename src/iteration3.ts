//
// Iteration 3 | Classes
//

  class BankAccount {
      
      balance: number = 0;
      accountHolder: string;

      constructor(accountHolder: string) {
          this.accountHolder = accountHolder;
      }

      getBalance(): number{
          return this.balance;
      }

      deposit(amount: number): number | string {
          if(amount <= 0) {
              return `Please provide a valid amount`;
          }

          this.balance += amount;
          return this.balance;
      }

      withdraw(amount: number): number | string {
          if(amount <= 0) {
              return `Please provide a valid amount`;
          }
          if (amount > this.balance) {
              return `Insufficient funds, Florian you have only ${this.balance} in your account`;
          }

          this.balance -= amount;
          return this.balance;
      }

  }  

    const account1 = new BankAccount("Florian Karl Wunsch");
    console.log(account1.accountHolder);
    console.log(account1.getBalance()); 
    console.log(account1.deposit(100)); 
    console.log(account1.withdraw(7000));
   


