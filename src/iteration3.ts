//
// Iteration 3 | Classes
//


class BankAccount{
 balance: number=0;
 accountHolder: string;
 constructor(accountHolder: string){
    this.accountHolder = accountHolder;
 }
 getBalance(){
    return this.balance;
 }

 deposit(amount: number){
    if(amount <= 0){
        console.log("Please provide a valid amount.");
        return;
    }
    else{
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }
}

withdraw(amount: number){
    if(amount <= 0){
        console.log("Please provide a valid amount.");
        return;
    }   
    if(amount > this.balance){
        console.log("Insufficient funds.");
        return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}. New balance is ${this.balance}.`); }

    



}