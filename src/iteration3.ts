//
// Iteration 3 | Classes
//


class BankAccount{
  balance: number = 0;
  accountHolder: string;
  
  constructor(accountHolder: string){
    this.accountHolder = accountHolder;
  }

  getBalance(): number{ 
    return this.balance;
  }

  deposit(amount: number):number | string{
    if(amount<=0) "please provide a valid amount";

    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number | string{
    if(amount<=0) "please provide a valid amount";

    if(amount>this.balance) "Insufficient fund";

    this.balance -= amount;
    return this.balance;
  }
}