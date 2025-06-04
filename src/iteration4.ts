//
// Iteration 4 | Type aliases
//


type Book = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number;
}

const newBook: Book = {title:"test", year:2025, genres: ["test", "testing"], rating:5, author: "test", numberOfPages:50};
console.log(newBook);

type Movie = {
    title: string;
year: number
genres: string[];
rating?: number;
director: string;
durationInMinutes?: number;
}

const newMovie = {title:"aaa", year:2025, genres: ["test", "testing"], rating:7, director: "bbb", durationInMinutes:10 };
console.log(newMovie)

type MusicAlbum = {
title: string;
year: number
genres: string[];
rating?: number;
artist: string;
numberOfTracks?: number;
durationInMinutes?: number;
albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}

const newMusicAlbum = {title:"aaa", year:2025, genres: ["test", "testing"], rating:7, artist: "bbb", numberOfTracks: 20, durationInMinutes:10, albumType: 'Studio Album' };
console.log(newMusicAlbum)

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum) {
   const currentYear = new Date().getFullYear();
   const difference = currentYear - mediaItem.year;
   return difference
}
