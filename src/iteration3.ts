//
// Iteration 3 | Classes
//

class BankAccount{
    balance:number=0
    accountHolder:string=""
    constructor(accountHolder:string){
        this.balance=5
        this.accountHolder=accountHolder
    }
    getBalance=():number=>{
       return this.balance
    }
    deposit=(amount:number):number|string=>{
        if(amount<=0){
            return `Please provide a valid amount`
        }else if(amount>this.balance){
            return `Insufficient funds`
        }else{
           return this.balance-=amount
        }
    }
}
//const bankAccount1= new BankAccount("einlyhoudiBank")

//bankAccount1.getBalance()
//console.log(bankAccount1.deposit(3))
