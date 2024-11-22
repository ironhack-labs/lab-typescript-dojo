//
// Iteration 4 | Type aliases
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

// Function
function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    return currentYear - mediaItem.year;
}

// Testing
const myBook: Book = { title: "1984", year: 1949, genres: ["Dystopian"], author: "George Orwell" };
console.log(getYearsSinceRelease(myBook)); // e.g., 75 (current year-dependent)






