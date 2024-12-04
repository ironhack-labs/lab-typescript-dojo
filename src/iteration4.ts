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
type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number;
}  
type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}  
function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    const difference = currentYear - mediaItem.year;
    return difference;
} 

// const myBook: Book = {
//     title: "abc",
//     year: 1960,
//     genres: ["Drama"],
//     author: "Hffg",
//     numberOfPages: 281,
// };

// const myMovie: Movie = {
//     title: "tfvggg",
//     year: 2010,
//     genres: ["Thriller"],
//     director: "Cfg",
//     durationInMinutes: 148,
// };

// const myAlbum: MusicAlbum = {
//     title: "hjggk",
//     year: 1969,
//     genres: ["Rock"],
//     artist: "The Beatles",
//     albumType: "Studio Album",
//     numberOfTracks: 17,
// };
// console.log(`Years since release of "${myBook.title}": ${getYearsSinceRelease(myBook)}`);
// console.log(`Years since release of "${myMovie.title}": ${getYearsSinceRelease(myMovie)}`);
// console.log(`Years since release of "${myAlbum.title}": ${getYearsSinceRelease(myAlbum)}`);