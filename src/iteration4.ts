//
// Iteration 4 | Type aliases
// 


type Book = {

    title : string;
    year : number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number;

}

type Movie = {
    
    title : string;
    year : number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinures?: number;

}

type MusicAlbum = {

    title : string;
    year : number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album'| 'Soundtrack' | 'Other';

}



function getYearsSinceRelease( mediaItem :  Book | Movie | MusicAlbum ){
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year;

}


const book: Book = {
    title : 'Alicia en el pais de las maravillas',
    year: 2000,
    genres: ['Fanstasy, Adventures'],
    author : 'Lewis Carroll',

}

const movie: Movie = {
    title: "The Matrix",
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    director: "The Wachowskis"
}

const album: MusicAlbum = {
    title: "Thriller",
    year: 1982,
    genres: ["Pop", "Rock"],
    artist: "Michael Jackson",
    albumType: "Studio Album"
};




console.log(`Years since ${book.title}:`, getYearsSinceRelease(book) );
console.log(`Years since ${album.title}:`, getYearsSinceRelease(album);)
console.log (`Years since ${movie.title}:`, getYearsSinceRelease(movie));