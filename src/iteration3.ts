//
// Iteration 3 | Classes
//


class BankAccount{
balance:number = 0;
accountHolder: string ="";
constructor ( accountHolder:string){
this.accountHolder = accountHolder;


}

getBalance():number{
return this.balance;
}

deposit(amount:number):any{
if (amount > 0){
this.balance += amount;
return this.balance;
}else if (amount <= 0){
return "Please provide a valid amount"
}

}

withdraw(amount:number):any{
if(amount <=0){
 return `Please provide a valid amount`
}else if(amount > this.balance){
 return `Insufficient funds` 
}

this.balance- amount
  return this.balance

}

}