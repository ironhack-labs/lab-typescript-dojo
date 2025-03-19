//
// Iteration 3 | Classes
//
class BankAccount{
    balance : number =0;
    accountHolder: string;

    constructor(accountHolder: string){
     this.accountHolder=accountHolder;   
     }
     getBalance(){
        return this.balance;
     }  
     deposit(amount:number){
        if(amount>0){
            this.balance+=amount;
        }
     } 
}

