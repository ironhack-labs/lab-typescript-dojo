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

const myBook: Book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    genres: ["Fiction", "Drama"],
    author: "Harper Lee",
    numberOfPages: 281,
    rating: 4.8
};

const myMovie: Movie = {
    title: "Inception",
    year: 2010,
    genres: ["Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    durationInMinutes: 148,
    rating: 4.7
};

const myAlbum: MusicAlbum = {
    title: "Thriller",
    year: 1982,
    genres: ["Pop", "R&B"],
    artist: "Michael Jackson",
    albumType: "Studio Album",
    numberOfTracks: 9,
    durationInMinutes: 42,
    rating: 4.9
};


console.log(`Years since book release: ${getYearsSinceRelease(myBook)}`);
console.log(`Years since movie release: ${getYearsSinceRelease(myMovie)}`);
console.log(`Years since album release: ${getYearsSinceRelease(myAlbum)}`);