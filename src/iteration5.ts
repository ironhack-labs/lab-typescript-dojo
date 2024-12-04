//
// Bonus: Iteration 5 | Interfaces
//

interface MediaItem {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
}
interface Book extends MediaItem {
    author: string;
    numberOfPages?: number;
}

interface Movie extends MediaItem {
    director: string;
    durationInMinutes?: number;
}

interface MusicAlbum extends MediaItem {
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}
function getYearsSinceRelease(mediaItem: MediaItem): number {
    const currentYear = new Date().getFullYear();
    const difference = currentYear - mediaItem.year;
    return difference;
}
// const myBook: Book = {
//     title: "dssdsdd",
//     year: 1925,
//     genres: ["dd", "dssss"],
//     author: "dsdsdds",
// };

// const myMovie: Movie = {
//     title: "Tddsx",
//     year: 1999,
//     genres: ["Action", "Sddi"],
//     director: "dssdss",
//     durationInMinutes: 136,
// };

// const myAlbum: MusicAlbum = {
//     title: "sdds",
//     year: 1982,
//     genres: ["Podsp", "R&dssd"],
//     artist: "dd sd",
//     albumType: "Studio Album",
// };

// console.log(`Years since release of "${myBook.title}": ${getYearsSinceRelease(myBook)}`);
// console.log(`Years since release of "${myMovie.title}": ${getYearsSinceRelease(myMovie)}`);
// console.log(`Years since release of "${myAlbum.title}": ${getYearsSinceRelease(myAlbum)}`);