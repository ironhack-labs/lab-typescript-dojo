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
};

type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number;
};

type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
};

function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    const difference = currentYear - mediaItem.year;
    return difference;
}  

const myBook: Book = {
    title: "1984",
    year: 1949,
    genres: ["Dystopian", "Political Fiction"],
    author: "George Orwell"
};

const myMovie: Movie = {
    title: "The Matrix",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    director: "Lana Wachowski, Lilly Wachowski"
};

const myAlbum: MusicAlbum = {
    title: "Abbey Road",
    year: 1969,
    genres: ["Rock"],
    artist: "The Beatles",
    albumType: "Studio Album"
};


console.log(getYearsSinceRelease(myBook));  
console.log(getYearsSinceRelease(myMovie)); 
console.log(getYearsSinceRelease(myAlbum)); 



