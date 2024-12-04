//
// Iteration 3 | Classes
//

//  3.1  //

class BankAccount1 {
    balance: number = 0;
    accountHolder: string;

        constructor(accountHolder: string){
            this.accountHolder = accountHolder;
        }

        getBalance(): number {
            return this.balance
        }
}

const test4 = new BankAccount1("Fiona");
console.log(test4);
console.log(test4.getBalance())


//  3.2  //

class BankAccount2 {
    balance: number = 0;
    accountHolder: string;

        constructor(accountHolder: string){
            this.accountHolder = accountHolder;
        }

        getBalance(): number {
            return this.balance
        }

        deposit(amount: number): string | number {
            if(amount <= 0) {
                return "Please provide a valid amount"
            }
            else {
                return this.balance += amount
            }
        }

        withdraw(amount: number): string | number {
            if(amount <= 0) {
                return "Please provide a valid amount"
            }
            else if (amount > this.balance) {
                return "Insufficient funds"
            }
            else {
                return this.balance -= amount
            }
        }
}

const test5 = new BankAccount2("Fiona");
console.log(test5);
console.log(test5.deposit(500));
console.log(test5.withdraw(50));
console.log(test5.withdraw(500));
