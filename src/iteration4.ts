//
// Iteration 4 | Type aliases
//


type Book = {
  title: string;
  year: number ;
  genres: string [] ;
rating? : number; 
author: string;
numberOfPages?: number

}

console.log()


type Movie = {
title: string;
year: number;
genres: string [];
rating?: number ;
director: string ;
durationInMinutes? : number 

}


type Music = { 
  title: string;
  year: number ; 
  genres: string []; 
  rating? : number;
  artist: string; 
 numberOfTracks?: number;
 durantionInMinutes: number;
 albumType: 'Studio'| 'Album'| 'Live Album'| 'Soundtrack'|  'Other'
}

export function getYearsSincerelease( mediaItem:Book|Movie|Music){

  const currentYear = new Date().getFullYear(); 
  const difference = currentYear - mediaItem.year;

  return difference
}