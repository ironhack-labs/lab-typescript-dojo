//
// Iteration 3 | Classes
//

class BankAccount {
    balance: number = 0;
    accountHolder: string;

    constructor(accountHolder: string) {
        this.accountHolder = accountHolder;
    }

    deposit(amount: number): number | string {
        if (amount <= 0) {
            return "Please provide a valid amount.";
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount: number): number | string {
        if (amount <= 0) {
            return "Please provide a valid amount.";
        }
        if (amount > this.balance) {
            return "Insufficient funds.";
        }
        this.balance -= amount;
        return this.balance;
    }
}

//const acc = new BankAccount("Alice")

//console.log(acc.deposit(100));   
//console.log(acc.withdraw(100));  
//console.log(acc.deposit(-50));  




type Book = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number
}

type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number

}

type MusicAlbum = {
title : string;
year : number;
genres : string [];
rating?: number;
artist : string;
numberOfTracks?: number;
durationInMinutes?: number;
albumType : 'Studio Album' | 'Live Album' |  'Soundtrack' | 'Other'
}

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
      const currentYear = new Date().getFullYear();
      const difference = currentYear - mediaItem.year;
      return difference;
  }  